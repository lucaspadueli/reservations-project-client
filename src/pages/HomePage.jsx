import LogoHome from "../assets/cordown.jpeg";
import Logo from "../assets/coworking-high-resolution-logo-black-transparent.png";
const HomePage = () => {


  return (
    <div className="h-screen">
        <nav className="bg-gray-800 h-12 ">
              
          <ul className="flex flex-row font-serif text-zinc-300 py-2 justify-end">
            <li className="mr-4 my-2 text-xs">Sign up</li>
            <li className="mr-4 my-2 text-xs">Login</li>
          </ul>
        </nav>
        
        <div className="container">
        <div className="flex flex-row items-center ">
        <img className="w-1/5 py-2 ml-4" src = {Logo} alt= "logo" />
        <p className="ml-8 font-serif" > The best place to work</p>
        </div>
        
        <img className="w-96 ml-2 rounded-lg" src = {LogoHome} alt = "homelogo"/>
        </div>

        <div className="w-80 mx-auto h-96 overflow-auto">
          <p className="text-gray-600 font-serif text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere. Potenti nullam ac tortor vitae purus faucibus. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Egestas dui id ornare arcu odio ut sem nulla pharetra. Scelerisque felis imperdiet proin fermentum leo vel. Sed ullamcorper morbi tincidunt ornare massa eget egestas. In ante metus dictum at tempor. Pellentesque pulvinar pellentesque habitant morbi. Facilisi morbi tempus iaculis urna id. Diam ut venenatis tellus in.

Ipsum faucibus vitae aliquet nec. Sociis natoque penatibus et magnis dis parturient montes nascetur. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Nibh ipsum consequat nisl vel pretium lectus quam id. Magna ac placerat vestibulum lectus mauris. Imperdiet proin fermentum leo vel orci porta non. At volutpat diam ut venenatis tellus. Velit dignissim sodales ut eu sem integer vitae. Nibh venenatis cras sed felis. Et ultrices neque ornare aenean euismod. Ut etiam sit amet nisl purus in mollis nunc sed. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Bibendum at varius vel pharetra vel turpis. Purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus. Dui ut ornare lectus sit amet est placerat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris.

Congue quisque egestas diam in arcu cursus euismod. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Auctor urna nunc id cursus metus aliquam eleifend mi in. Morbi tristique senectus et netus et malesuada fames. Odio pellentesque diam volutpat commodo sed egestas. Nibh venenatis cras sed felis eget velit. Massa tempor nec feugiat nisl pretium fusce id velit. Lorem mollis aliquam ut porttitor leo a. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Faucibus et molestie ac feugiat sed lectus vestibulum. Arcu felis bibendum ut tristique et egestas quis ipsum. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Odio pellentesque diam volutpat commodo sed. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Venenatis a condimentum vitae sapien pellentesque. Quam nulla porttitor massa id.
          </p>
        </div>
        
    <div className="my-4">
    <h3 className="text-center text-2xl">Find the best Rooms</h3>
    </div>
      
    

    </div>
  )
};

export default HomePage;
