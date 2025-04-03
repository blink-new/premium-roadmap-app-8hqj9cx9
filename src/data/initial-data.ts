
import { Solution } from '../types/roadmap';

export const initialData: Solution[] = [
  {
    id: 'product-1',
    name: 'Enterprise Suite',
    mission: 'Empower businesses with intelligent automation solutions',
    vision: 'Become the leading enterprise automation platform by 2025',
    cards: [
      {
        id: 'card-1',
        title: 'AI-Powered Workflow Builder',
        description: 'Drag-and-drop interface with AI suggestions for optimal workflow creation',
        status: 'now',
        progress: 75,
        productSection: 'Core Platform',
        productGoal: 'Increase workflow creation efficiency by 50%',
        stakeholder: 'Sarah Chen',
        tags: [
          { id: 'tag-1', name: 'AI/ML', color: '#6366f1' },
          { id: 'tag-2', name: 'UX', color: '#ec4899' }
        ]
      },
      {
        id: 'card-2',
        title: 'Real-time Analytics Dashboard',
        description: 'Comprehensive analytics with customizable metrics and reporting',
        status: 'next',
        progress: 30,
        productSection: 'Analytics',
        productGoal: 'Enable data-driven decision making',
        stakeholder: 'Michael Ross',
        tags: [
          { id: 'tag-3', name: 'Analytics', color: '#14b8a6' },
          { id: 'tag-4', name: 'Dashboard', color: '#f59e0b' }
        ]
      },
      {
        id: 'card-3',
        title: 'Enterprise SSO Integration',
        description: 'Seamless authentication with major SSO providers',
        status: 'later',
        progress: 10,
        productSection: 'Security',
        productGoal: 'Enhance enterprise security compliance',
        stakeholder: 'Lisa Wong',
        tags: [
          { id: 'tag-5', name: 'Security', color: '#dc2626' },
          { id: 'tag-6', name: 'Enterprise', color: '#8b5cf6' }
        ]
      }
    ]
  },
  {
    id: 'product-2',
    name: 'Mobile Platform',
    mission: 'Deliver seamless mobile-first business solutions',
    vision: 'Create the most user-friendly mobile enterprise platform',
    cards: [
      {
        id: 'card-4',
        title: 'Cross-platform Design System',
        description: 'Unified design system for iOS and Android platforms',
        status: 'now',
        progress: 60,
        productSection: 'Design',
        productGoal: 'Establish consistent brand experience',
        stakeholder: 'Alex Johnson',
        tags: [
          { id: 'tag-7', name: 'Design', color: '#8b5cf6' },
          { id: 'tag-8', name: 'Mobile', color: '#059669' }
        ]
      }
    ]
  }
];