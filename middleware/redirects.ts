export default defineNuxtRouteMiddleware((to, from) => {
  // Редирект с корня по параметру ?to=/route
  if (to.path === '/' && to.query && typeof to.query.to !== 'undefined') {
    const raw = Array.isArray(to.query.to) ? to.query.to[0] : to.query.to
    const target = String(raw || '/')
    if (!target || target === '/') return

    // Разбираем целевой путь и его query (если переданы внутри to)
    const [targetPathOnly, targetSearch = ''] = target.split('?')
    const normalizedPath = targetPathOnly.startsWith('/')
      ? targetPathOnly
      : `/${targetPathOnly}`

    const targetQueryFromToParam: Record<string, string> = {}
    if (targetSearch) {
      new URLSearchParams(targetSearch).forEach((v, k) => {
        targetQueryFromToParam[k] = v
      })
    }

    // Берём исходные query (кроме to) и объединяем с целевыми
    const sourceQuery = { ...to.query }
    delete (sourceQuery as any).to
    const mergedQuery: Record<string, any> = {
      ...(sourceQuery as Record<string, any>),
      ...targetQueryFromToParam,
    }

    return navigateTo({ path: normalizedPath, query: mergedQuery }, { replace: true })
  }
  // Редирект с /offer/tr на /offer?tr
  if (to.path === '/offer/tr') {
    return navigateTo('/offer?tr', { replace: true })
  }
  
  // Можно добавить другие редиректы здесь
  // if (to.path === '/offer/waitlist') {
  //   return navigateTo('/offer?waitlist', { replace: true })
  // }
})
