module.exports = {
  deploy: {
    prod: {
      user: "ubuntu",
      host: "ec2-3-133-160-55.us-east-2.compute.amazonaws.com",
      key: "~/.ssh/webreathesocial.pem",
      ref: "origin/master",
      repo: "git@github.com:gourraguis/webreathesocial.git",
      path: "/home/ubuntu/webreathesocial",
      "post-deploy":
        "docker-compose build && docker-compose up --remove-orphans -d",
    }
  },
};
