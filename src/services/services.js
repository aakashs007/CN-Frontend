export const SERVICES = {
  BASE_URL: 'http://localhost:4000/api/v1/cn',
  // BASE_URL: `${window.location.origin}/api/v1/cn`,
  apis: {
    raise_doubt: {
      url: '/doubt',
      type: 'POST'
    },
    get_doubts: {
      url: '/doubt',
      type: 'GET'
    },
    post_comment: {
      url: '/comment',
      type: 'POST'
    },
    doubt_action: {
      url: '/doubt/action',
      type: 'POST'
    },
    ta_report: {
      url: '/ta/report',
      type: 'GET'
    },
    auth: {
      url: '/auth',
      type: 'POST'
    }
  }
}