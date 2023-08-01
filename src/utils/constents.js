const CONSTENTS = {
  APP_NAME:        "MYAPP",
  SITE_ID:          "myapp", // unique site name without-spaces
  HOME_URL:         "http://localhost:3000",
  MODE:             "local", // local, dev, prod
  BASE_API_URL:     "http://localhost:3000",
};

switch (CONSTENTS.MODE) {
  case "local":
    CONSTENTS.HOME_URL = "http://localhost:3000";
    break;
  case "dev":
    CONSTENTS.HOME_URL = "https://dev.example.com";
    break;
  case "prod":
    CONSTENTS.HOME_URL = "https://example.com";
    break;
}

export default CONSTENTS;
