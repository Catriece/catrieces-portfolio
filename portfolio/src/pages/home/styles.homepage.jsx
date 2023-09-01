const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
    },
  },
});

//   jobTitle: {
//     fontWeight: 700,
//     fontSize: "60px",

//     [theme.breakpoints.down(1279)]: {
//       fontSize: "45px",
//     },
//     [theme.breakpoints.down("xs")]: {
//       fontSize: "30px",
//     },
//   },
// }));

// export default useStyles;
