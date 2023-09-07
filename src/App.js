import { Box } from "@mui/material";
import Gallery from "./components/Gallery";

function App() {
  return (
      <Box sx={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
        <Gallery />
      </Box>
  );
}

export default App;
