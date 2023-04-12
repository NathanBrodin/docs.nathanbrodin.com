import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg fill="currentColor" width="24" height="24" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 C 47.7109 21.4844 47.3828 20.1718 45.5078 18.2500 L 32.5703 5.1015 C 30.7891 3.2734 29.3359 2.8750 26.6875 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 15.7422 49.3515 C 13.3281 49.3515 12.0625 48.0625 12.0625 45.7187 L 12.0625 10.3047 C 12.0625 7.9844 13.3281 6.6484 15.7656 6.6484 L 26.1718 6.6484 L 26.1718 20.2656 C 26.1718 23.2187 27.6718 24.6718 30.5781 24.6718 L 43.9375 24.6718 L 43.9375 45.7187 C 43.9375 48.0625 42.6953 49.3515 40.2578 49.3515 Z M 31.0000 21.1328 C 30.0859 21.1328 29.7109 20.7578 29.7109 19.8203 L 29.7109 7.3750 L 43.2109 21.1328 Z M 36.6250 31.1172 L 18.8359 31.1172 C 17.9922 31.1172 17.3828 31.7500 17.3828 32.5469 C 17.3828 33.3672 17.9922 34.0000 18.8359 34.0000 L 36.6250 34.0000 C 37.4453 34.0000 38.0781 33.3672 38.0781 32.5469 C 38.0781 31.7500 37.4453 31.1172 36.6250 31.1172 Z M 36.6250 39.2969 L 18.8359 39.2969 C 17.9922 39.2969 17.3828 39.9531 17.3828 40.7734 C 17.3828 41.5703 17.9922 42.1797 18.8359 42.1797 L 36.6250 42.1797 C 37.4453 42.1797 38.0781 41.5703 38.0781 40.7734 C 38.0781 39.9531 37.4453 39.2969 36.6250 39.2969 Z"></path></g></svg>
      <span style={{ marginLeft: '.4em', fontWeight: 600 }}>
        Nathan's docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/NathanBrodin/docs.nathanbrodin.com',
  },
  docsRepositoryBase: 'https://github.com/NathanBrodin/docs.nathanbrodin.com',
  footer: {
    text: 'This site was made with Nextra',
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nathan's docs" />
      <meta property="og:description" content="Documentation of Nathan's Windows 11 installation" />
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: "%s - Nathan"
    }
  }
}

export default config
