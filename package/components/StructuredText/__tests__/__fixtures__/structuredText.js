export const paragraph = {
    value: {
        schema: 'dast',
        document: {
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'This is a '
                        },
                        {
                            type: 'span',
                            marks: ['strong'],
                            value: 'title'
                        }
                    ]
                }
            ]
        }
    }
};
export const heading = {
    value: {
        schema: 'dast',
        document: {
            type: 'root',
            children: [
                {
                    type: 'heading',
                    level: 1,
                    children: [
                        {
                            type: 'span',
                            value: 'This\nis a '
                        },
                        {
                            type: 'span',
                            marks: ['strong'],
                            value: 'title'
                        }
                    ]
                }
            ]
        }
    }
};
export const structuredTextWithBlocksAndLinks = {
    value: {
        schema: 'dast',
        document: {
            type: 'root',
            children: [
                {
                    type: 'heading',
                    level: 1,
                    children: [
                        {
                            type: 'span',
                            value: 'This is a'
                        },
                        {
                            type: 'span',
                            marks: ['highlight'],
                            value: 'title'
                        },
                        {
                            type: 'inlineItem',
                            item: '123'
                        },
                        {
                            type: 'itemLink',
                            item: '123',
                            meta: [{ id: 'target', value: '_blank' }],
                            children: [{ type: 'span', value: 'here!' }]
                        }
                    ]
                },
                {
                    type: 'block',
                    item: '456'
                }
            ]
        }
    },
    blocks: [
        {
            id: '456',
            __typename: 'QuoteRecord',
            quote: 'Foo bar.',
            author: 'Mark Smith'
        }
    ],
    links: [
        {
            id: '123',
            __typename: 'DocPageRecord',
            title: 'How to code',
            slug: 'how-to-code'
        }
    ]
};
export const full = {
    value: {
        schema: 'dast',
        document: {
            type: 'root',
            children: [
                {
                    type: 'heading',
                    level: 1,
                    children: [
                        {
                            type: 'span',
                            value: 'This is a '
                        },
                        {
                            type: 'span',
                            marks: ['highlight'],
                            value: 'title'
                        },
                        {
                            type: 'span',
                            value: '.'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "And it's fucking perfect."
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: 'Seriously, what the fuck else do you want?'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'You probably build websites and think your 💩  is special.\nYou think your 13 megabyte parallax-ative home page is going to get you'
                        },
                        {
                            type: 'span',
                            marks: ['strong'],
                            value: ' some fucking Awwward banner y'
                        },
                        {
                            type: 'span',
                            value: 'ou can glue to the top corner of your site. You think your 40-pound jQuery file and 83 polyfills give IE7 a boner because it finally has box-shadow. Wrong, motherfucker. Let me describe your perfect-ass website:'
                        }
                    ]
                },
                {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                        {
                            type: 'listItem',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'span',
                                            value: "Shit's lightweight and loads fast"
                                        }
                                    ]
                                },
                                {
                                    type: 'list',
                                    style: 'bulleted',
                                    children: [
                                        {
                                            type: 'listItem',
                                            children: [
                                                {
                                                    type: 'paragraph',
                                                    children: [
                                                        {
                                                            type: 'span',
                                                            value: 'Looks the same in all your shitty browsers'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            type: 'listItem',
                                            children: [
                                                {
                                                    type: 'paragraph',
                                                    children: [
                                                        {
                                                            type: 'span',
                                                            value: 'Fits on all your shitty screens'
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'list',
                                                    style: 'bulleted',
                                                    children: [
                                                        {
                                                            type: 'listItem',
                                                            children: [
                                                                {
                                                                    type: 'paragraph',
                                                                    children: [
                                                                        {
                                                                            type: 'span',
                                                                            value: "The motherfucker's accessible to every asshole that visits your site"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'listItem',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'span',
                                            value: "Shit's legible and gets your fucking point across (if you had one instead of just 5mb pics of hipsters drinking coffee)"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 3,
                    children: [
                        {
                            type: 'span',
                            value: 'Well guess what, motherfucker:'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "You. Are. Over-designing. Look at this shit. It's a motherfucking website. Why the fuck do you need to animate a fucking trendy-ass banner flag when I hover over that useless piece of shit? You spent hours on it and added 80 kilobytes to your fucking site, and some motherfucker jabbing at it on their iPad with fat sausage fingers will never see that shit. Not to mention blind people will never see that shit, but they don't see any of your shitty shit."
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "You never knew it, but this is your perfect website. Here's why."
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: "It's fucking lightweight"
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'This entire page weighs less than the gradient-meshed facebook logo on your fucking Wordpress site. Did you seriously load 100kb of jQuery UI just so you could animate the fucking background color of a div? You loaded all 7 fontfaces of a shitty webfont just so you could say "Hi." at 100px height at the beginning of your site? '
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'You piece of shit.'
                        }
                    ]
                },
                {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                        {
                            type: 'listItem',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            item: '11924676',
                                            type: 'inlineItem'
                                        },
                                        {
                                            item: '11924676',
                                            type: 'itemLink',
                                            children: [
                                                {
                                                    type: 'span',
                                                    value: 'Foobar'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'listItem',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'span',
                                            value: ''
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    item: '11922283',
                    type: 'block'
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: "It's responsive"
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "You dumbass. You thought you needed media queries to be responsive, but no. Responsive means that it responds to whatever motherfucking screensize it's viewed on. This site doesn't care if you're on an iMac or a motherfucking Tamagotchi."
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: 'It fucking works'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "Look at this shit. You can read it ... that is, if you can read, motherfucker. It makes sense. It has motherfucking hierarchy. It's using HTML5 tags so you and your bitch-ass browser know what the fuck's in this fucking site. That's semantics, motherfucker."
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'It has content on the fucking screen. Your site has three bylines and link to your dribbble account, but you spread it over 7 full screens and make me click some bobbing button to show me how cool the jQuery ScrollTo plugin is.'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'Cross-browser compatibility? Load this motherfucker in IE6. I fucking dare you.'
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: 'This is a website. '
                        },
                        {
                            type: 'span',
                            marks: ['highlight'],
                            value: 'Look at it.'
                        },
                        {
                            type: 'span',
                            value: " You've never seen one before."
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "Like the man who's never grown out his beard has no idea what his true natural state is, you have no fucking idea what a website is. All you have ever seen are shitty skeuomorphic bastardizations of what should be text communicating a fucking message. This is a real, naked website. Look at it. It's fucking beautiful."
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 3,
                    children: [
                        {
                            type: 'span',
                            value: 'Yes, this is fucking satire, you fuck'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: "I'm not actually saying your shitty site should look like this. What I'm saying is that all the problems we have with websites are ones we create ourselves. Websites aren't broken by default, they are functional, high-performing, and accessible. You break them. You son-of-a-bitch."
                        }
                    ]
                },
                {
                    type: 'blockquote',
                    attribution: 'some German motherfucker',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'span',
                                    value: '"Good design is as little design as possible." '
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'heading',
                    level: 2,
                    children: [
                        {
                            type: 'span',
                            value: 'Epilogue'
                        }
                    ]
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            type: 'span',
                            value: 'From the philosophies expressed (poorly) above, '
                        },
                        {
                            url: 'http://txti.es',
                            type: 'link',
                            meta: [
                                { id: 'rel', value: 'nofollow' },
                                { id: 'foo', value: '123' },
                                { id: 'target', value: '_blank' }
                            ],
                            children: [
                                {
                                    type: 'span',
                                    value: 'txti'
                                }
                            ]
                        },
                        {
                            type: 'span',
                            value: ' was created. You should try it today to make your own motherfucking websites.'
                        }
                    ]
                }
            ]
        }
    },
    blocks: [
        {
            __typename: 'ImageRecord',
            id: '11922283',
            image: {
                url: 'https://www.datocms-assets.com/205/1606492977-oberlo-cover.jpg'
            }
        }
    ],
    links: [
        {
            __typename: 'BlogPostRecord',
            id: '11924676',
            title: 'New feature: Media Area granular permissions',
            author: {
                name: 'Stefano Verna'
            }
        }
    ]
};
