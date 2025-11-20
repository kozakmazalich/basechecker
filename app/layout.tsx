export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Base Airdrop Checker',
        description: 'Check your Base ecosystem airdrop eligibility and allocation based on on-chain activity',
        other: {
        'fc:miniapp': JSON.stringify({
            version: 'next',
            imageUrl: 'https://basechecker.vercel.app/preview.png',
            button: {
                title: `Base Airdrop Checker`,
                action: {
                    type: 'launch_miniapp',
                    name: 'Base Airdrop Checker',
                    url: 'https://basechecker.vercel.app/',
                    splashImageUrl: 'https://basechecker.vercel.app/splash.png',
                    splashBackgroundColor: '#000000',
                },
            },
        }),
        },
    };
    }
