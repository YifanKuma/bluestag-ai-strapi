import type { Schema, Struct } from '@strapi/strapi';

export interface AboutVisionItems extends Struct.ComponentSchema {
  collectionName: 'components_about_vision_items';
  info: {
    displayName: 'vision_items';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface AppdevAppdevKpi extends Struct.ComponentSchema {
  collectionName: 'components_appdev_appdev_kpis';
  info: {
    displayName: 'appdev.kpi';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AppdevAppdevShowcaseBullet extends Struct.ComponentSchema {
  collectionName: 'components_appdev_appdev_showcase_bullets';
  info: {
    displayName: 'appdev.showcase_bullet';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface AppdevAppdevShowcaseItem extends Struct.ComponentSchema {
  collectionName: 'components_appdev_appdev_showcase_items';
  info: {
    displayName: 'appdev.showcase_item';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'appdev.appdev-showcase-bullet', true>;
    note: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AppdevAppdevStoryPanel extends Struct.ComponentSchema {
  collectionName: 'components_appdev_appdev_story_panels';
  info: {
    displayName: 'appdev.story_panel';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['pencil-ruler', 'server-cog', 'lock', 'rocket-icon']
    >;
    title: Schema.Attribute.String;
  };
}

export interface FooterCompanyLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_company_links';
  info: {
    displayName: 'company-link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-links';
  };
  attributes: {
    facebook_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://facebook.com/bluestagai'>;
    instagram_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://instagram.com/bluestag.ai'>;
    linkedin_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://linkedin.com/company/bluestag-ai'>;
  };
}

export interface HomeBadge extends Struct.ComponentSchema {
  collectionName: 'components_home_badges';
  info: {
    displayName: 'badge';
  };
  attributes: {
    badge_icon_key: Schema.Attribute.Enumeration<
      ['cloud', 'lightning', 'bolt', 'shield', 'gear']
    >;
    badge_text: Schema.Attribute.String;
  };
}

export interface HomeFeatures extends Struct.ComponentSchema {
  collectionName: 'components_home_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    icon_key: Schema.Attribute.Enumeration<
      [
        'phone',
        'credit-card',
        'headphones',
        'sparkles',
        'cpu',
        'zap',
        'video',
        'clapperboard',
        'megaphone',
        'check',
        'bot',
        'message',
        'code',
        'app',
        'server',
        'shield',
        'headset',
        'gauge',
        'activity',
      ]
    >;
    text: Schema.Attribute.String;
  };
}

export interface HomeHeroKpis extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_kpis';
  info: {
    displayName: 'hero_kpis';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface IndustryCta extends Struct.ComponentSchema {
  collectionName: 'components_industry_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IndustryDemo extends Struct.ComponentSchema {
  collectionName: 'components_industry_demos';
  info: {
    displayName: 'demo';
  };
  attributes: {
    actor: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface IndustryDemoStep extends Struct.ComponentSchema {
  collectionName: 'components_industry_demo_steps';
  info: {
    displayName: 'demo-step';
  };
  attributes: {
    actor: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface IndustryIndustryCta extends Struct.ComponentSchema {
  collectionName: 'components_industry_industry_ctas';
  info: {
    displayName: 'industry_cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface NavigationNavLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav-link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface PricingAddon extends Struct.ComponentSchema {
  collectionName: 'components_pricing_addons';
  info: {
    displayName: 'Addon';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_key: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_pricing_comparison_rows';
  info: {
    displayName: 'Comparison Row';
  };
  attributes: {
    feature: Schema.Attribute.Text;
    values: Schema.Attribute.JSON;
  };
}

export interface PricingFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_pricing_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface PricingFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_pricing_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface PricingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_pricing_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface PricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plans';
  info: {
    displayName: 'Plan';
  };
  attributes: {
    call_minutes_included: Schema.Attribute.Integer;
    Feature_Item: Schema.Attribute.Component<'pricing.features', true>;
    icon_key: Schema.Attribute.Text;
    parallel_calls: Schema.Attribute.Integer;
    popular: Schema.Attribute.Boolean;
    price_annual: Schema.Attribute.Decimal;
    price_monthly: Schema.Attribute.Decimal;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PrivacySections extends Struct.ComponentSchema {
  collectionName: 'components_privacy_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    section_id: Schema.Attribute.String;
  };
}

export interface SectionsChannelItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_channel_items';
  info: {
    displayName: 'channel_item';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsKpiItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_kpi_items';
  info: {
    displayName: 'kpi_item';
  };
  attributes: {
    label: Schema.Attribute.String;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SectionsPerformanceStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_performance_stats';
  info: {
    displayName: 'performance_stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SectionsServiceTab extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_tabs';
  info: {
    displayName: 'Service Tab';
  };
  attributes: {
    Boolean: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    key: Schema.Attribute.Enumeration<
      ['voice', 'video', 'chatbot', 'appdev', 'social']
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SectionsStatsStat extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_stats';
  info: {
    displayName: 'stats.stat';
  };
  attributes: {
    bullets: Schema.Attribute.JSON;
    explainerTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    hintBars: Schema.Attribute.Boolean;
    prefix: Schema.Attribute.String;
    sub: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SectionsStepItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_step_items';
  info: {
    displayName: 'step_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTemplateItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_template_items';
  info: {
    displayName: 'template_item';
  };
  attributes: {
    chips: Schema.Attribute.JSON;
    description: Schema.Attribute.Text;
    key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsValuePills extends Struct.ComponentSchema {
  collectionName: 'components_sections_value_pills';
  info: {
    displayName: 'value_pills';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface VideoAiFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_video_ai_feature_cards';
  info: {
    displayName: 'feature-card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Wand2', 'Captions', 'Video', 'Users', 'GraduationCap', 'Presentation']
    >;
    title: Schema.Attribute.String;
  };
}

export interface VideoAiFlowStep extends Struct.ComponentSchema {
  collectionName: 'components_video_ai_flow_steps';
  info: {
    displayName: 'flow-step';
  };
  attributes: {
    step_number: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VideoAiKpiItem extends Struct.ComponentSchema {
  collectionName: 'components_video_ai_kpi_items';
  info: {
    displayName: 'kpi-item';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Gauge', 'Clock', 'BadgeCheck', 'Layers']
    >;
    kpi: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface VideoAiShowcaseItem extends Struct.ComponentSchema {
  collectionName: 'components_video_ai_showcase_items';
  info: {
    displayName: 'showcase-item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Users', 'GraduationCap', 'Presentation']
    >;
    length: Schema.Attribute.String;
    ratio: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VideoAiUsecaseItem extends Struct.ComponentSchema {
  collectionName: 'components_video_ai_usecase_items';
  info: {
    displayName: 'usecase-item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['Users', 'GraduationCap', 'Presentation']
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.vision-items': AboutVisionItems;
      'appdev.appdev-kpi': AppdevAppdevKpi;
      'appdev.appdev-showcase-bullet': AppdevAppdevShowcaseBullet;
      'appdev.appdev-showcase-item': AppdevAppdevShowcaseItem;
      'appdev.appdev-story-panel': AppdevAppdevStoryPanel;
      'footer.company-link': FooterCompanyLink;
      'footer.social-links': FooterSocialLinks;
      'home.badge': HomeBadge;
      'home.features': HomeFeatures;
      'home.hero-kpis': HomeHeroKpis;
      'industry.cta': IndustryCta;
      'industry.demo': IndustryDemo;
      'industry.demo-step': IndustryDemoStep;
      'industry.industry-cta': IndustryIndustryCta;
      'navigation.nav-link': NavigationNavLink;
      'pricing.addon': PricingAddon;
      'pricing.comparison-row': PricingComparisonRow;
      'pricing.faq-item': PricingFaqItem;
      'pricing.feature-item': PricingFeatureItem;
      'pricing.features': PricingFeatures;
      'pricing.plan': PricingPlan;
      'privacy.sections': PrivacySections;
      'sections.channel-item': SectionsChannelItem;
      'sections.features': SectionsFeatures;
      'sections.kpi-item': SectionsKpiItem;
      'sections.performance-stats': SectionsPerformanceStats;
      'sections.service-tab': SectionsServiceTab;
      'sections.stats-stat': SectionsStatsStat;
      'sections.step-item': SectionsStepItem;
      'sections.template-item': SectionsTemplateItem;
      'sections.value-pills': SectionsValuePills;
      'video-ai.feature-card': VideoAiFeatureCard;
      'video-ai.flow-step': VideoAiFlowStep;
      'video-ai.kpi-item': VideoAiKpiItem;
      'video-ai.showcase-item': VideoAiShowcaseItem;
      'video-ai.usecase-item': VideoAiUsecaseItem;
    }
  }
}
