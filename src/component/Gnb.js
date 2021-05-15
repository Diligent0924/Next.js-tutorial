import { Item, Menu } from 'semantic-ui-react'
import { useRouter } from 'next/router'


export default function Top(){
    const router = useRouter();
    let activeItem;

    function Category(list){
        {list.map((item) => (
            console.log(item.category)
            )
        )}
    }
  
    if (router.pathname === "/") {
      activeItem = "home";
    } else if (router.pathname === "/about") {
      activeItem = "about";
    }  // pathname 과 avtiveItem을 연결한다...?
  
    function goLink(e, data) {
        switch(data.name){
            case "home":
                router.push('/')
                break;
            case "about":
                router.push('/about')
                break;
            case "admin":
                router.push('/admin')
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
            name='home' 
            active={activeItem === 'home'}
            onClick={goLink} 
            />
            <Menu.Item
            name='about'
            active={activeItem === 'about'}
             onClick={goLink} 
            />
            <Menu.Item
            name='admin'
            active={activeItem === 'admin'}
             onClick={goLink}
            />
        </Menu>
    )
}