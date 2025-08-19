import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  logo: {
    width: "auto",
    cursor: "pointer",
    height: "54px",
  },
  menubutton: {
    color: "var(--fontcolor2)",
    fontSize: "1rem",
    fontFamily: "var(--interregular)",
    "&:hover": {
      color: "#1E90FF",
      backgroundColor: "transparent",
    },
    transition: "color 0.3s ease",
  },
  activeMenu: {
    color: "var(--primary)",
  },
  herosectionTitle: {
    fontFamily: "var(--interregular)",
    fontSize: "3rem",
    color: "var(--white)",
    letterSpacing: "1px",
    "& span": {
      color: "var(--white)",
      fontSize: "3.5rem",
      fontFamily: "var(--intermediumitalic)",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      "& span": {
        fontSize: "2.5rem",
      },
    },
  },
  herosubtitle: {
    fontSize: "1.125rem",
    fontFamily: "var(--interregular)",
    color: "var(--white)",
    lineHeight: "2rem",
  },
  primarybutton: {
    backgroundColor: "#1e90ff",
    padding: "10px 16px",
    fontSize: "1rem",
    borderRadius: "12px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    transition: "all 0.3s ease",
    color: "#FFFFFF",
    fontFamily: "var(--intermedium)",
    "& :hover": {
      backgroundColor: "#1674CC",
      boxShadow:
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },
  },
  secondarybutton: {
    border: "1px solid #1E90FF",
    backgroundColor: "#FFFFFF",
    color: "#1E90FF",
    padding: "10px 16px",
    fontSize: "1rem",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "& :hover": {
      backgroundColor: "#1E90FF",
      color: "#FFFFFF",
    },
  },
  // Hero Section Styles

  sectiontitle: {
    fontSize: "2.25rem",
    fontFamily: "var(--intermedium)",
    color: "var(--fontcolor1)",
    marginBottom: "16px",
  },
  sectionbody: {
    fontSize: "1.125rem",
    fontFamily: "var(--interregular)",
    color: "var(--fontcolor3)",
    lineHeight: "1.75rem",
    marginBottom: "24px",
  },
  testimonialcontent: {
    color: "var(--fontcolor2)",
    lineHeight: 1.6,
    fontSize: "1rem",
    fontFamily: "var(--interitalic)",
  },
  footerlogo: {
    width: "auto",
    height: "40px",
    cursor: "pointer",
    objectFit: "contain",
  },
});
