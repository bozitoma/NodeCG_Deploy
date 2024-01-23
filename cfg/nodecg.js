module.exports = {
  port: process.env.PORT || 9000,
  login: {
    enabled: true,
    sessionSecret: "FoQzRFiMnF",
    local: {
      enabled: true,
      allowedUsers: [
        {
          username: "bozitoma",
          password: "bozitoma11",
        },
        {
          username: "watch",
          password: "watch_ssbm",
        },
        {
          username: "vgbc",
          password: "vgbc",
        },
      ],
    },
  },
};
