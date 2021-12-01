import Tab from '@mui/material/Tab';
import { styled } from '@mui/styles';
import { useNavigate } from "react-router-dom";

function LinkTab(props) {
  const navigate = useNavigate()
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if (props.href) {
          window.location = props.href
          return
        }
        event.preventDefault();
        navigate('/' + props.link)
      }}
      {...props}
    />
  );
}

const CustomTab = styled(LinkTab)({
  fontSize: '1em !important',
  textTransform: 'none !important',
  color: '#000 !important',
  opacity: '1 !important',
  fontWeight: 'normal !important',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important;',
})

export default CustomTab