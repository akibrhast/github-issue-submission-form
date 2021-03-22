const OWNER = 'hackforla';
const REPO = 'website';

const CLIENT_ID = '0f4d20ae24b10b1b1e45';
const CLIENT_SECRET = '99763bf9f1a09166ae7fa9d2fa2d1a7283816afa';

const BASE_CORS_URI = 'https://secure-brook-93015.herokuapp.com/';
const REDIRECT_URI = `https://akibrhast.github.io/github-issue-submission-form/callback`;
const ISSUE_SUBMISSION = "https://akibrhast.github.io/github-issue-submission-form/issue.html"
const CREATE_ISSUE = `${BASE_CORS_URI}https://api.github.com/repos/${OWNER}/${REPO}/issues`;
const AUTHORIZE_URI = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
const ACCESS_TOKEN_URI = `${BASE_CORS_URI}https://github.com/login/oauth/access_token`;
const GRAPH_QL_BASE_ENDPOINT = `https://api.github.com/graphql`;
//local settings
const REDIRECT_URI_LOCAL = `http://localhost:4000/callback`;
const ISSUE_SUBMISSION_LOCAL = `http://localhost:4000/issue`;