
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'App': typeof import("../components/App.vue")['default']
    'ContactForm': typeof import("../components/ContactForm.vue")['default']
    'DesignersSection': typeof import("../components/DesignersSection.vue")['default']
    'EventFeatures': typeof import("../components/EventFeatures.vue")['default']
    'FacesSection': typeof import("../components/FacesSection.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'HowItWasSection': typeof import("../components/HowItWasSection.vue")['default']
    'ImageCarousel': typeof import("../components/ImageCarousel.vue")['default']
    'MarqueeSection': typeof import("../components/MarqueeSection.vue")['default']
    'ProgramSection': typeof import("../components/ProgramSection.vue")['default']
    'SponsorsSection': typeof import("../components/SponsorsSection.vue")['default']
    'StationSection': typeof import("../components/StationSection.vue")['default']
    'StatisticsSection': typeof import("../components/StatisticsSection.vue")['default']
    'TheFooter': typeof import("../components/TheFooter.vue")['default']
    'TheHeader': typeof import("../components/TheHeader.vue")['default']
    'IconsInstagramIcon': typeof import("../components/icons/InstagramIcon.vue")['default']
    'IconsInstagramWhiteIcon': typeof import("../components/icons/InstagramWhiteIcon.vue")['default']
    'IconsLogoBlack': typeof import("../components/icons/LogoBlack.vue")['default']
    'IconsLogoIcon': typeof import("../components/icons/LogoIcon.vue")['default']
    'IconsLogoWhiteIcon': typeof import("../components/icons/LogoWhiteIcon.vue")['default']
    'IconsMenuIcon': typeof import("../components/icons/MenuIcon.vue")['default']
    'IconsXIcon': typeof import("../components/icons/XIcon.vue")['default']
    'IconsYoutubeIcon': typeof import("../components/icons/YoutubeIcon.vue")['default']
    'IconsYoutubeWhiteIcon': typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']
    'ProgramBigSponsorStation': typeof import("../components/program/BigSponsorStation.vue")['default']
    'ProgramEvent': typeof import("../components/program/ProgramEvent.vue")['default']
    'ProgramSponsorStation': typeof import("../components/program/SponsorStation.vue")['default']
    'UiBaseButton': typeof import("../components/ui/BaseButton.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyApp': typeof import("../components/App.vue")['default']
    'LazyContactForm': typeof import("../components/ContactForm.vue")['default']
    'LazyDesignersSection': typeof import("../components/DesignersSection.vue")['default']
    'LazyEventFeatures': typeof import("../components/EventFeatures.vue")['default']
    'LazyFacesSection': typeof import("../components/FacesSection.vue")['default']
    'LazyHeroSection': typeof import("../components/HeroSection.vue")['default']
    'LazyHowItWasSection': typeof import("../components/HowItWasSection.vue")['default']
    'LazyImageCarousel': typeof import("../components/ImageCarousel.vue")['default']
    'LazyMarqueeSection': typeof import("../components/MarqueeSection.vue")['default']
    'LazyProgramSection': typeof import("../components/ProgramSection.vue")['default']
    'LazySponsorsSection': typeof import("../components/SponsorsSection.vue")['default']
    'LazyStationSection': typeof import("../components/StationSection.vue")['default']
    'LazyStatisticsSection': typeof import("../components/StatisticsSection.vue")['default']
    'LazyTheFooter': typeof import("../components/TheFooter.vue")['default']
    'LazyTheHeader': typeof import("../components/TheHeader.vue")['default']
    'LazyIconsInstagramIcon': typeof import("../components/icons/InstagramIcon.vue")['default']
    'LazyIconsInstagramWhiteIcon': typeof import("../components/icons/InstagramWhiteIcon.vue")['default']
    'LazyIconsLogoBlack': typeof import("../components/icons/LogoBlack.vue")['default']
    'LazyIconsLogoIcon': typeof import("../components/icons/LogoIcon.vue")['default']
    'LazyIconsLogoWhiteIcon': typeof import("../components/icons/LogoWhiteIcon.vue")['default']
    'LazyIconsMenuIcon': typeof import("../components/icons/MenuIcon.vue")['default']
    'LazyIconsXIcon': typeof import("../components/icons/XIcon.vue")['default']
    'LazyIconsYoutubeIcon': typeof import("../components/icons/YoutubeIcon.vue")['default']
    'LazyIconsYoutubeWhiteIcon': typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']
    'LazyProgramBigSponsorStation': typeof import("../components/program/BigSponsorStation.vue")['default']
    'LazyProgramEvent': typeof import("../components/program/ProgramEvent.vue")['default']
    'LazyProgramSponsorStation': typeof import("../components/program/SponsorStation.vue")['default']
    'LazyUiBaseButton': typeof import("../components/ui/BaseButton.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const App: typeof import("../components/App.vue")['default']
export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const DesignersSection: typeof import("../components/DesignersSection.vue")['default']
export const EventFeatures: typeof import("../components/EventFeatures.vue")['default']
export const FacesSection: typeof import("../components/FacesSection.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const HowItWasSection: typeof import("../components/HowItWasSection.vue")['default']
export const ImageCarousel: typeof import("../components/ImageCarousel.vue")['default']
export const MarqueeSection: typeof import("../components/MarqueeSection.vue")['default']
export const ProgramSection: typeof import("../components/ProgramSection.vue")['default']
export const SponsorsSection: typeof import("../components/SponsorsSection.vue")['default']
export const StationSection: typeof import("../components/StationSection.vue")['default']
export const StatisticsSection: typeof import("../components/StatisticsSection.vue")['default']
export const TheFooter: typeof import("../components/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/TheHeader.vue")['default']
export const IconsInstagramIcon: typeof import("../components/icons/InstagramIcon.vue")['default']
export const IconsInstagramWhiteIcon: typeof import("../components/icons/InstagramWhiteIcon.vue")['default']
export const IconsLogoBlack: typeof import("../components/icons/LogoBlack.vue")['default']
export const IconsLogoIcon: typeof import("../components/icons/LogoIcon.vue")['default']
export const IconsLogoWhiteIcon: typeof import("../components/icons/LogoWhiteIcon.vue")['default']
export const IconsMenuIcon: typeof import("../components/icons/MenuIcon.vue")['default']
export const IconsXIcon: typeof import("../components/icons/XIcon.vue")['default']
export const IconsYoutubeIcon: typeof import("../components/icons/YoutubeIcon.vue")['default']
export const IconsYoutubeWhiteIcon: typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']
export const ProgramBigSponsorStation: typeof import("../components/program/BigSponsorStation.vue")['default']
export const ProgramEvent: typeof import("../components/program/ProgramEvent.vue")['default']
export const ProgramSponsorStation: typeof import("../components/program/SponsorStation.vue")['default']
export const UiBaseButton: typeof import("../components/ui/BaseButton.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyApp: typeof import("../components/App.vue")['default']
export const LazyContactForm: typeof import("../components/ContactForm.vue")['default']
export const LazyDesignersSection: typeof import("../components/DesignersSection.vue")['default']
export const LazyEventFeatures: typeof import("../components/EventFeatures.vue")['default']
export const LazyFacesSection: typeof import("../components/FacesSection.vue")['default']
export const LazyHeroSection: typeof import("../components/HeroSection.vue")['default']
export const LazyHowItWasSection: typeof import("../components/HowItWasSection.vue")['default']
export const LazyImageCarousel: typeof import("../components/ImageCarousel.vue")['default']
export const LazyMarqueeSection: typeof import("../components/MarqueeSection.vue")['default']
export const LazyProgramSection: typeof import("../components/ProgramSection.vue")['default']
export const LazySponsorsSection: typeof import("../components/SponsorsSection.vue")['default']
export const LazyStationSection: typeof import("../components/StationSection.vue")['default']
export const LazyStatisticsSection: typeof import("../components/StatisticsSection.vue")['default']
export const LazyTheFooter: typeof import("../components/TheFooter.vue")['default']
export const LazyTheHeader: typeof import("../components/TheHeader.vue")['default']
export const LazyIconsInstagramIcon: typeof import("../components/icons/InstagramIcon.vue")['default']
export const LazyIconsInstagramWhiteIcon: typeof import("../components/icons/InstagramWhiteIcon.vue")['default']
export const LazyIconsLogoBlack: typeof import("../components/icons/LogoBlack.vue")['default']
export const LazyIconsLogoIcon: typeof import("../components/icons/LogoIcon.vue")['default']
export const LazyIconsLogoWhiteIcon: typeof import("../components/icons/LogoWhiteIcon.vue")['default']
export const LazyIconsMenuIcon: typeof import("../components/icons/MenuIcon.vue")['default']
export const LazyIconsXIcon: typeof import("../components/icons/XIcon.vue")['default']
export const LazyIconsYoutubeIcon: typeof import("../components/icons/YoutubeIcon.vue")['default']
export const LazyIconsYoutubeWhiteIcon: typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']
export const LazyProgramBigSponsorStation: typeof import("../components/program/BigSponsorStation.vue")['default']
export const LazyProgramEvent: typeof import("../components/program/ProgramEvent.vue")['default']
export const LazyProgramSponsorStation: typeof import("../components/program/SponsorStation.vue")['default']
export const LazyUiBaseButton: typeof import("../components/ui/BaseButton.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
