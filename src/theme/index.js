import { createTheme } from "@mui/material/styles";
import overrides from "./overrides";

const theme = createTheme({
  components: {
    ...overrides,
  },
});

export default theme;
