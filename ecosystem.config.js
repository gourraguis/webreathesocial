module.exports = {
  deploy: {
    prod: {
      user: "ubuntu",
      host: "innerscene.com",
      key: "~/.ssh/innerscene.pem",
      ref: "origin/master",
      repo: "git@gitlab.com:gourragui.success/innerscene.git",
      path: "/home/ubuntu/innerscene",
      "post-deploy":
        "docker-compose build && docker-compose up --remove-orphans -d",
    }
  },
};
