const baseRoute = "https://psp.mephi.ru/initiatives/api/";

const config = {
  POST_APPLICATION_ROUTE: baseRoute + "initiative/contact",
  GET_INITATIVES_ROUTE: baseRoute + "initiative",
  POST_INITIATIVE_ROUTE: baseRoute + "initiative",
  GET_RESUME_ROUTE: baseRoute + "resume",
  POST_RESUME_ROUTE: baseRoute + "resume",
  POST_RESUME_APPLICATION_ROUTE: baseRoute + "resume/contact",
  POST_SEARCHER_INITIATIVE_ROUTE: baseRoute + "search/initiative",
  POST_SEARCHER_RESUME_ROUTE: baseRoute + "search/resume",
};

export default config;
