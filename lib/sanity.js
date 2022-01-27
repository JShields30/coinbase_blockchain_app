import sanityClient from '@sanity/client'

export const client = sanityClient( {
    projectId: '4abbcg8k',
    dataset: 'production',
    apiversion: '2021-03-25',
    token: 'sk7QS9424DcDdWj6giaJYOw7nbuTOtrxcLoIBP8ytdquSrz52TEX4AingoOBtDxd0W4F4h5xJC7C0xp6NgV9l0kwHrrSgEXJQFGuGsi9uHeh83tc4gPwVQC21i9uSs3iZzhvqDreD01d2lnYdtKEZuiMWCAWPanSFPhRaBPXTnS9qWu0LnlN',
    useCdn: false,
})