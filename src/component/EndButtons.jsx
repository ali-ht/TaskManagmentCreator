import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: "#14B858",
  color: "white",
  width: "100%",
  height: "48px",
  borderRadius: "12px",
  fontFamily: "IRANYekanWeb",
});

function EndButtons({ title , disable , ...other }) {
  if (disable) {
    return (
      <StyledButton disabled variant="text" {...other} sx={{
        backgroundColor: "#BCC3BF",
        cursor: "default",
        ":hover": {
        backgroundColor: "#BCC3BF"
      }
      }}>
        {title}
      </StyledButton>
    )
  }
  else return (
    <StyledButton variant="text" {...other} sx={{
      backgroundColor: "#14B858",
      ":hover": {
        backgroundColor: "#2E7D32"
      }
    }}>
      {title}
    </StyledButton>
  );
}
export default EndButtons