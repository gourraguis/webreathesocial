import { communityManagement } from './communityManagement'
import { digitalStrategyContent } from './digitalStrategy'
import { ecommerceContent } from './ecommerce'
import { emailCampaignContent } from './emailCampaign'
import { googleCampaginContent } from './googleCampaign'
import { leadGenerationContent } from './leadGeneration'
import { socialMedialContent } from './socialMedial'
import { webDevContent } from './webDev'

export const serviceContent = {
  'digital-strategy': {
    title: 'Digital Strategy',
    content: digitalStrategyContent,
  },
  'community-management': {
    title: 'Community managment',
    content: communityManagement,
  },
  'social-media': {
    title: 'Social Media Advertising',
    content: socialMedialContent,
  },
  'google-campaign': {
    title: 'Google Advertising',
    content: googleCampaginContent,
  },
  'email-campaign': {
    title: 'Email Marketing',
    content: emailCampaignContent,
  },
  'lead-generation': {
    title: 'Lead Generation',
    content: leadGenerationContent,
  },
  'web-dev': {
    title: 'Web Development',
    content: webDevContent,
  },
  ecommerce: {
    title: 'Ecommerce',
    content: ecommerceContent,
  },
}
