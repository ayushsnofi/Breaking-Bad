import { useContext, useEffect } from "react";
import { quotesContext } from "../context/QuotesContext";
import { getAllQuotes } from "../api/breakingApis";
import { Box, Divider } from "@mui/material";
import QuotesTemp from "./QuotesTemplate";

export default function Quotes() {
  const { quotesDetails, dispatchQuotesDetails } = useContext(quotesContext);
  useEffect(() => {
    getAllQuotes(dispatchQuotesDetails);
  }, []);
  console.log(quotesDetails);
  return (
    <Box sx={{ backgroundColor: "#433c52", color: "white" }}>
      {quotesDetails.loader !== true &&
        quotesDetails.data.map((d, index) => {
          return (
            <>
              <QuotesTemp
                data={d}
                index={index}
                lastIndex={quotesDetails.data.length}
              />
              <Divider />
            </>
          );
        })}
    </Box>
  );
}
