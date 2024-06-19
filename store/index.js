import {defineStore} from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => ({
        cookie: true,
        navigation: [
            {name: 'About Us', href: 'about'},
            {name: 'How it Works', href: 'how-it-works'},
            // {name: 'Pricing', href: 'pricing'},
        ],
        howTos: [
            {title: 'Register your Spend.In account.', img: 'how-1'},
            {title: 'Fill in the list of your business expenses.', img: 'how-2'},
            {title: 'Done, let’s continue the work.', img: 'how-3'},
        ],
        features: [
            {
                name: 'Sustain your financial runway with efficient OpEx management',
                description: 'Efficient OpEx management to keep your business running smoothly.',
                icon: 'wallet-check',
            },
            {
                name: 'Gain insights and control over your day-to-day expenses',
                description: 'Understand and control your day-to-day expenses.',
                icon: 'eye',
            },
            {
                name: 'Plan for the future with accurate expense forecasts',
                description: '',
                icon: 'status-up',
            },
        ],
        carouselItems: [
            {
                title: "It’s just incredible!",
                subtitle:
                    "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
                name: 'John Doe',
                position: 'Owner',
                avatar: {src: 'user1'}
            }, {
                title: "Satisfied User here!",
                subtitle:
                    "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
                name: 'Jane Doe',
                position: 'Marketer',
                avatar: {src: 'user2'}
            }, {
                title: "No doubt, Spending is the best!",
                subtitle:
                    "The best! That’s what I want to say to this platform, didn’t know that there’s a platform to help you  manage your business expenses like this! Very recommended to you who have a big business!",
                name: 'Jon Snow',
                position: 'King',
                avatar: {src: 'user3'}
            }, {
                title: "It’s just incredible!",
                subtitle:
                    "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
                name: 'Doctor Fu',
                position: 'HR',
                avatar: {src: 'user1'}
            }],
        frequencies: [
            {value: 'monthly', label: 'Monthly', priceSuffix: '/month'},
            {value: 'annually', label: 'Annually', priceSuffix: '/year'},
        ],
        pricingTiers: [
            {
                name: 'Free',
                id: 'tier-free',
                href: '#',
                price: {monthly: '$0', annually: '$0'},
                miniDesc: 'Perfect plan to get started',
                description: 'A free plan grants you access to some cool features of Spend.In.',
                features: ['Sync across device', '5 workspace', 'Collaborate with 5 user'],
                mostPopular: false,
            },
            {
                name: 'Pro',
                id: 'tier-pro',
                href: '#',
                price: {monthly: '$12', annually: '$288'},
                miniDesc: 'Perfect plan for professionals!',
                description: 'For professional only! Start arranging your expenses with our best templates.',
                features: [
                    'Everything in Free Plan',
                    'Unlimited workspace',
                    'Collaborative workspace',
                    'Sharing permission',
                    'Admin tools',
                    '100+ integrations',
                ],
                mostPopular: true,
            },
            {
                name: 'Ultimate',
                id: 'tier-ultimate',
                href: '#',
                price: {monthly: '$33', annually: '$576'},
                miniDesc: 'Best suits for great company!',
                description: 'If you a finance manager at big  company, this plan is a perfect match.',
                features: [
                    'Everything in Pro Plan',
                    'Daily performance reports',
                    'Dedicated assistant',
                    'Artificial intelligence',
                    'Marketing tools & automations',
                    'Advanced security',
                ],
                mostPopular: false,
            },
        ],
        footerNavigation: {
            product: [
                {name: 'Digital Invoice', href: '#'},
                {name: 'Insights', href: '#'},
                {name: 'Reimbursements', href: '#'},
                {name: 'Virtual Assistant', href: '#'},
                {name: 'Artificial Intelligence', href: '#'},
            ],
            company: [
                {name: 'About Us', href: '#'},
                {name: 'Newsletters', href: '#'},
                {name: 'Our Partners', href: '#'},
                {name: 'Career', href: '#'},
                {name: 'Contact Us', href: '#'},
            ],
            resources: [
                {name: 'Blog', href: 'https://blog.everydaymoney.app'},
                // {name: 'Pricing', href: '#'},
                {name: 'FAQ', href: '#'},
                {name: 'Events', href: '#'},
                {name: 'Ebook & Guide', href: '#'},
            ],
            follow: [
                {name: 'LinkedIn', href: 'https://www.linkedin.com/company/everydaymoney/'},
                {name: 'X (Twitter)', href: 'https://x.com/everydaymoneyhq'},
                {name: 'Instagram', href: 'https://instagram.com/everydaymoneyhq'},
                {name: 'Facebook', href: 'https://facebook.com/everydaymoneyng'},
                {name: 'YouTube', href: 'https://www.youtube.com/channel/UCQkd3xmlhhIkdYUCvhEKvQQ'},
            ]
        },
    }), persist: true,
})