import Tab from '@mui/material/Tab';
import { styled } from '@mui/styles';
import { useNavigate } from "react-router-dom";

// кастомизация компонента Material UI
function LinkTab(props) {
  // получение функции навигации
  const navigate = useNavigate()
  return (
    // инициализация компонента
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
// определение кастомных стилей
const CustomTab = styled(LinkTab)({
  fontSize: '1em !important',
  textTransform: 'none !important',
  color: '#000 !important',
  opacity: '1 !important',
  fontWeight: 'normal !important',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important;',
})

export default CustomTab