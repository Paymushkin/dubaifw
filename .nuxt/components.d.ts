
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AiContestFaq': typeof import("../components/AiContestFaq.vue")['default']
    'AppSeo': typeof import("../components/AppSeo.vue")['default']
    'ApprovedCompaniesList': typeof import("../components/ApprovedCompaniesList.vue")['default']
    'ApprovedCompaniesListFixed': typeof import("../components/ApprovedCompaniesListFixed.vue")['default']
    'ApprovedCompaniesListOld': typeof import("../components/ApprovedCompaniesListOld.vue")['default']
    'CompaniesList': typeof import("../components/CompaniesList.vue")['default']
    'ContactForm': typeof import("../components/ContactForm.vue")['default']
    'DesignersSection': typeof import("../components/DesignersSection.vue")['default']
    'EventFeatures': typeof import("../components/EventFeatures.vue")['default']
    'FacesOfEfwSection': typeof import("../components/FacesOfEfwSection.vue")['default']
    'FacesSection': typeof import("../components/FacesSection.vue")['default']
    'FaqSection': typeof import("../components/FaqSection.vue")['default']
    'FaqSectionDynamic': typeof import("../components/FaqSectionDynamic.vue")['default']
    'GalleryIframe': typeof import("../components/GalleryIframe.vue")['default']
    'HeroSection': typeof import("../components/HeroSection.vue")['default']
    'HowItWasSection': typeof import("../components/HowItWasSection.vue")['default']
    'ImageCarousel': typeof import("../components/ImageCarousel.vue")['default']
    'MarqueeSection': typeof import("../components/MarqueeSection.vue")['default']
    'NewProgramSection': typeof import("../components/NewProgramSection.vue")['default']
    'PhotoGallery': typeof import("../components/PhotoGallery.vue")['default']
    'PhotographerBlock': typeof import("../components/PhotographerBlock.vue")['default']
    'ProgramSection': typeof import("../components/ProgramSection.vue")['default']
    'ReelsCarousel': typeof import("../components/ReelsCarousel.vue")['default']
    'ReelsVideoCarousel': typeof import("../components/ReelsVideoCarousel.vue")['default']
    'SponsorsSection': typeof import("../components/SponsorsSection.vue")['default']
    'StationSection': typeof import("../components/StationSection.vue")['default']
    'StatisticsSection': typeof import("../components/StatisticsSection.vue")['default']
    'TeamMemberCard': typeof import("../components/TeamMemberCard.vue")['default']
    'TheFooter': typeof import("../components/TheFooter.vue")['default']
    'TheHeader': typeof import("../components/TheHeader.vue")['default']
    'WaitlistForm': typeof import("../components/WaitlistForm.vue")['default']
    'WidgetGuide': typeof import("../components/WidgetGuide.vue")['default']
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
    'UiWhatsAppButton': typeof import("../components/ui/WhatsAppButton.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'SiteLink': typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
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
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAiContestFaq': LazyComponent<typeof import("../components/AiContestFaq.vue")['default']>
    'LazyAppSeo': LazyComponent<typeof import("../components/AppSeo.vue")['default']>
    'LazyApprovedCompaniesList': LazyComponent<typeof import("../components/ApprovedCompaniesList.vue")['default']>
    'LazyApprovedCompaniesListFixed': LazyComponent<typeof import("../components/ApprovedCompaniesListFixed.vue")['default']>
    'LazyApprovedCompaniesListOld': LazyComponent<typeof import("../components/ApprovedCompaniesListOld.vue")['default']>
    'LazyCompaniesList': LazyComponent<typeof import("../components/CompaniesList.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../components/ContactForm.vue")['default']>
    'LazyDesignersSection': LazyComponent<typeof import("../components/DesignersSection.vue")['default']>
    'LazyEventFeatures': LazyComponent<typeof import("../components/EventFeatures.vue")['default']>
    'LazyFacesOfEfwSection': LazyComponent<typeof import("../components/FacesOfEfwSection.vue")['default']>
    'LazyFacesSection': LazyComponent<typeof import("../components/FacesSection.vue")['default']>
    'LazyFaqSection': LazyComponent<typeof import("../components/FaqSection.vue")['default']>
    'LazyFaqSectionDynamic': LazyComponent<typeof import("../components/FaqSectionDynamic.vue")['default']>
    'LazyGalleryIframe': LazyComponent<typeof import("../components/GalleryIframe.vue")['default']>
    'LazyHeroSection': LazyComponent<typeof import("../components/HeroSection.vue")['default']>
    'LazyHowItWasSection': LazyComponent<typeof import("../components/HowItWasSection.vue")['default']>
    'LazyImageCarousel': LazyComponent<typeof import("../components/ImageCarousel.vue")['default']>
    'LazyMarqueeSection': LazyComponent<typeof import("../components/MarqueeSection.vue")['default']>
    'LazyNewProgramSection': LazyComponent<typeof import("../components/NewProgramSection.vue")['default']>
    'LazyPhotoGallery': LazyComponent<typeof import("../components/PhotoGallery.vue")['default']>
    'LazyPhotographerBlock': LazyComponent<typeof import("../components/PhotographerBlock.vue")['default']>
    'LazyProgramSection': LazyComponent<typeof import("../components/ProgramSection.vue")['default']>
    'LazyReelsCarousel': LazyComponent<typeof import("../components/ReelsCarousel.vue")['default']>
    'LazyReelsVideoCarousel': LazyComponent<typeof import("../components/ReelsVideoCarousel.vue")['default']>
    'LazySponsorsSection': LazyComponent<typeof import("../components/SponsorsSection.vue")['default']>
    'LazyStationSection': LazyComponent<typeof import("../components/StationSection.vue")['default']>
    'LazyStatisticsSection': LazyComponent<typeof import("../components/StatisticsSection.vue")['default']>
    'LazyTeamMemberCard': LazyComponent<typeof import("../components/TeamMemberCard.vue")['default']>
    'LazyTheFooter': LazyComponent<typeof import("../components/TheFooter.vue")['default']>
    'LazyTheHeader': LazyComponent<typeof import("../components/TheHeader.vue")['default']>
    'LazyWaitlistForm': LazyComponent<typeof import("../components/WaitlistForm.vue")['default']>
    'LazyWidgetGuide': LazyComponent<typeof import("../components/WidgetGuide.vue")['default']>
    'LazyIconsInstagramIcon': LazyComponent<typeof import("../components/icons/InstagramIcon.vue")['default']>
    'LazyIconsInstagramWhiteIcon': LazyComponent<typeof import("../components/icons/InstagramWhiteIcon.vue")['default']>
    'LazyIconsLogoBlack': LazyComponent<typeof import("../components/icons/LogoBlack.vue")['default']>
    'LazyIconsLogoIcon': LazyComponent<typeof import("../components/icons/LogoIcon.vue")['default']>
    'LazyIconsLogoWhiteIcon': LazyComponent<typeof import("../components/icons/LogoWhiteIcon.vue")['default']>
    'LazyIconsMenuIcon': LazyComponent<typeof import("../components/icons/MenuIcon.vue")['default']>
    'LazyIconsXIcon': LazyComponent<typeof import("../components/icons/XIcon.vue")['default']>
    'LazyIconsYoutubeIcon': LazyComponent<typeof import("../components/icons/YoutubeIcon.vue")['default']>
    'LazyIconsYoutubeWhiteIcon': LazyComponent<typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']>
    'LazyProgramBigSponsorStation': LazyComponent<typeof import("../components/program/BigSponsorStation.vue")['default']>
    'LazyProgramEvent': LazyComponent<typeof import("../components/program/ProgramEvent.vue")['default']>
    'LazyProgramSponsorStation': LazyComponent<typeof import("../components/program/SponsorStation.vue")['default']>
    'LazyUiBaseButton': LazyComponent<typeof import("../components/ui/BaseButton.vue")['default']>
    'LazyUiWhatsAppButton': LazyComponent<typeof import("../components/ui/WhatsAppButton.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazySiteLink': LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AiContestFaq: typeof import("../components/AiContestFaq.vue")['default']
export const AppSeo: typeof import("../components/AppSeo.vue")['default']
export const ApprovedCompaniesList: typeof import("../components/ApprovedCompaniesList.vue")['default']
export const ApprovedCompaniesListFixed: typeof import("../components/ApprovedCompaniesListFixed.vue")['default']
export const ApprovedCompaniesListOld: typeof import("../components/ApprovedCompaniesListOld.vue")['default']
export const CompaniesList: typeof import("../components/CompaniesList.vue")['default']
export const ContactForm: typeof import("../components/ContactForm.vue")['default']
export const DesignersSection: typeof import("../components/DesignersSection.vue")['default']
export const EventFeatures: typeof import("../components/EventFeatures.vue")['default']
export const FacesOfEfwSection: typeof import("../components/FacesOfEfwSection.vue")['default']
export const FacesSection: typeof import("../components/FacesSection.vue")['default']
export const FaqSection: typeof import("../components/FaqSection.vue")['default']
export const FaqSectionDynamic: typeof import("../components/FaqSectionDynamic.vue")['default']
export const GalleryIframe: typeof import("../components/GalleryIframe.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const HowItWasSection: typeof import("../components/HowItWasSection.vue")['default']
export const ImageCarousel: typeof import("../components/ImageCarousel.vue")['default']
export const MarqueeSection: typeof import("../components/MarqueeSection.vue")['default']
export const NewProgramSection: typeof import("../components/NewProgramSection.vue")['default']
export const PhotoGallery: typeof import("../components/PhotoGallery.vue")['default']
export const PhotographerBlock: typeof import("../components/PhotographerBlock.vue")['default']
export const ProgramSection: typeof import("../components/ProgramSection.vue")['default']
export const ReelsCarousel: typeof import("../components/ReelsCarousel.vue")['default']
export const ReelsVideoCarousel: typeof import("../components/ReelsVideoCarousel.vue")['default']
export const SponsorsSection: typeof import("../components/SponsorsSection.vue")['default']
export const StationSection: typeof import("../components/StationSection.vue")['default']
export const StatisticsSection: typeof import("../components/StatisticsSection.vue")['default']
export const TeamMemberCard: typeof import("../components/TeamMemberCard.vue")['default']
export const TheFooter: typeof import("../components/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/TheHeader.vue")['default']
export const WaitlistForm: typeof import("../components/WaitlistForm.vue")['default']
export const WidgetGuide: typeof import("../components/WidgetGuide.vue")['default']
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
export const UiWhatsAppButton: typeof import("../components/ui/WhatsAppButton.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const SiteLink: typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
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
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAiContestFaq: LazyComponent<typeof import("../components/AiContestFaq.vue")['default']>
export const LazyAppSeo: LazyComponent<typeof import("../components/AppSeo.vue")['default']>
export const LazyApprovedCompaniesList: LazyComponent<typeof import("../components/ApprovedCompaniesList.vue")['default']>
export const LazyApprovedCompaniesListFixed: LazyComponent<typeof import("../components/ApprovedCompaniesListFixed.vue")['default']>
export const LazyApprovedCompaniesListOld: LazyComponent<typeof import("../components/ApprovedCompaniesListOld.vue")['default']>
export const LazyCompaniesList: LazyComponent<typeof import("../components/CompaniesList.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/ContactForm.vue")['default']>
export const LazyDesignersSection: LazyComponent<typeof import("../components/DesignersSection.vue")['default']>
export const LazyEventFeatures: LazyComponent<typeof import("../components/EventFeatures.vue")['default']>
export const LazyFacesOfEfwSection: LazyComponent<typeof import("../components/FacesOfEfwSection.vue")['default']>
export const LazyFacesSection: LazyComponent<typeof import("../components/FacesSection.vue")['default']>
export const LazyFaqSection: LazyComponent<typeof import("../components/FaqSection.vue")['default']>
export const LazyFaqSectionDynamic: LazyComponent<typeof import("../components/FaqSectionDynamic.vue")['default']>
export const LazyGalleryIframe: LazyComponent<typeof import("../components/GalleryIframe.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyHowItWasSection: LazyComponent<typeof import("../components/HowItWasSection.vue")['default']>
export const LazyImageCarousel: LazyComponent<typeof import("../components/ImageCarousel.vue")['default']>
export const LazyMarqueeSection: LazyComponent<typeof import("../components/MarqueeSection.vue")['default']>
export const LazyNewProgramSection: LazyComponent<typeof import("../components/NewProgramSection.vue")['default']>
export const LazyPhotoGallery: LazyComponent<typeof import("../components/PhotoGallery.vue")['default']>
export const LazyPhotographerBlock: LazyComponent<typeof import("../components/PhotographerBlock.vue")['default']>
export const LazyProgramSection: LazyComponent<typeof import("../components/ProgramSection.vue")['default']>
export const LazyReelsCarousel: LazyComponent<typeof import("../components/ReelsCarousel.vue")['default']>
export const LazyReelsVideoCarousel: LazyComponent<typeof import("../components/ReelsVideoCarousel.vue")['default']>
export const LazySponsorsSection: LazyComponent<typeof import("../components/SponsorsSection.vue")['default']>
export const LazyStationSection: LazyComponent<typeof import("../components/StationSection.vue")['default']>
export const LazyStatisticsSection: LazyComponent<typeof import("../components/StatisticsSection.vue")['default']>
export const LazyTeamMemberCard: LazyComponent<typeof import("../components/TeamMemberCard.vue")['default']>
export const LazyTheFooter: LazyComponent<typeof import("../components/TheFooter.vue")['default']>
export const LazyTheHeader: LazyComponent<typeof import("../components/TheHeader.vue")['default']>
export const LazyWaitlistForm: LazyComponent<typeof import("../components/WaitlistForm.vue")['default']>
export const LazyWidgetGuide: LazyComponent<typeof import("../components/WidgetGuide.vue")['default']>
export const LazyIconsInstagramIcon: LazyComponent<typeof import("../components/icons/InstagramIcon.vue")['default']>
export const LazyIconsInstagramWhiteIcon: LazyComponent<typeof import("../components/icons/InstagramWhiteIcon.vue")['default']>
export const LazyIconsLogoBlack: LazyComponent<typeof import("../components/icons/LogoBlack.vue")['default']>
export const LazyIconsLogoIcon: LazyComponent<typeof import("../components/icons/LogoIcon.vue")['default']>
export const LazyIconsLogoWhiteIcon: LazyComponent<typeof import("../components/icons/LogoWhiteIcon.vue")['default']>
export const LazyIconsMenuIcon: LazyComponent<typeof import("../components/icons/MenuIcon.vue")['default']>
export const LazyIconsXIcon: LazyComponent<typeof import("../components/icons/XIcon.vue")['default']>
export const LazyIconsYoutubeIcon: LazyComponent<typeof import("../components/icons/YoutubeIcon.vue")['default']>
export const LazyIconsYoutubeWhiteIcon: LazyComponent<typeof import("../components/icons/YoutubeWhiteIcon.vue")['default']>
export const LazyProgramBigSponsorStation: LazyComponent<typeof import("../components/program/BigSponsorStation.vue")['default']>
export const LazyProgramEvent: LazyComponent<typeof import("../components/program/ProgramEvent.vue")['default']>
export const LazyProgramSponsorStation: LazyComponent<typeof import("../components/program/SponsorStation.vue")['default']>
export const LazyUiBaseButton: LazyComponent<typeof import("../components/ui/BaseButton.vue")['default']>
export const LazyUiWhatsAppButton: LazyComponent<typeof import("../components/ui/WhatsAppButton.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazySiteLink: LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
