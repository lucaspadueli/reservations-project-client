import LogoHome from "../assets/cordown.jpeg";
import Logo from "../assets/coworking-high-resolution-logo-black-transparent.png";

import RoomsContainer from "../components/RoomsShowHome";

const HomePage = () => {


  return (
    <div className="h-screen bg-gray-100 ">
        
        <div className="w-80 mx-auto h-4/6 overflow-auto mb-4">
        <p className="text-center text-2xl font-serif py-6 mb-4" > The best place to work</p>
        <img className="w-96 mx-auto rounded-lg" src = {LogoHome} alt = "homelogo"/>
          <p className="text-gray-600 font-serif text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere. Potenti nullam ac tortor vitae purus faucibus. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Egestas dui id ornare arcu odio ut sem nulla pharetra. Scelerisque felis imperdiet proin fermentum leo vel. Sed ullamcorper morbi tincidunt ornare massa eget egestas. In ante metus dictum at tempor. Pellentesque pulvinar pellentesque habitant morbi. Facilisi morbi tempus iaculis urna id. Diam ut venenatis tellus in.

Ipsum faucibus vitae aliquet nec. Sociis natoque penatibus et magnis dis parturient montes nascetur. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Nibh ipsum consequat nisl vel pretium lectus quam id. Magna ac placerat vestibulum lectus mauris. Imperdiet proin fermentum leo vel orci porta non. At volutpat diam ut venenatis tellus. Velit dignissim sodales ut eu sem integer vitae. Nibh venenatis cras sed felis. Et ultrices neque ornare aenean euismod. Ut etiam sit amet nisl purus in mollis nunc sed. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Bibendum at varius vel pharetra vel turpis. Purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus. Dui ut ornare lectus sit amet est placerat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris.

Congue quisque egestas diam in arcu cursus euismod. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Auctor urna nunc id cursus metus aliquam eleifend mi in. Morbi tristique senectus et netus et malesuada fames. Odio pellentesque diam volutpat commodo sed egestas. Nibh venenatis cras sed felis eget velit. Massa tempor nec feugiat nisl pretium fusce id velit. Lorem mollis aliquam ut porttitor leo a. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Faucibus et molestie ac feugiat sed lectus vestibulum. Arcu felis bibendum ut tristique et egestas quis ipsum. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Odio pellentesque diam volutpat commodo sed. Elit scelerisque mauris pellentesque pulvinar pellentesque. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Venenatis a condimentum vitae sapien pellentesque. Quam nulla porttitor massa id.
          </p>
        </div>
        
    <hr/>
    <RoomsContainer/>
      
    

    </div>
  )
};

export default HomePage;
