import React from "react";
import "./Lay.css"
import { Outlet ,Link} from "react-router-dom";
import HOME from "./HOME";
import FACE from "./FACE";
import HAIR from "./HAIR";
import MAKEUP from "./MAKEUP";
import BODY from "./BODY";
import BABY from "./BABY";
import COMBOS from "./COMBOS";
import NEWLAUNCHES from "./NewLaunches";
import INGREDIENT from "./INGREDIENT";
import PLANTGOODNESS from "./PLANTGOODNESS";
import LOGIN from "./LOGIN";
function Lay()
{
    return(
        <>
        <nav>
            <div className="navp">
                <p>Asia's 1st Brand MADE SAFE certified Products<a>  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                     Buy Ant 2 Favorites & Get 2 Bestsellers Free | Code :B2G2 | Shop Now</a></p>
            
            </div>
            <div className="imo">
               <p>
                <img src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"  width={150} height={35} />
                 <label >
                    <input type="text" placeholder="Search your Products"  />
                 </label>
                 
                 <button >SEARCH</button> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <img src="https://images.mamaearth.in/svg/gi-home-button.svg"  width={150} height={35}/>
                </p>
            </div>
            <hr/>
            <div className="head">
        <ol>
            <li><Link to="/" element={HOME}>HOME</Link></li>
            <li><Link to="face" element={FACE }>FACE</Link></li>
            <li><Link to="hair" element={HAIR}>HAIR</Link></li>
            <li><Link to="makeup" element={MAKEUP}>MAKEUP</Link></li>
            <li><Link to="body" element={BODY}>BODY</Link></li>
            <li><Link to="baby" element={BABY}>BABY</Link></li>
            <li><Link to="combos" element={COMBOS}>COMBOS</Link></li>
            <li><Link to="newlaunches" element={NEWLAUNCHES}>NEWLAUNCHES</Link></li>
            <li><Link to="ingredient" element={INGREDIENT}>INGREDIENT</Link></li>
            <li><Link to="plantgoodness" element={PLANTGOODNESS}>PLANTGOODNESS</Link></li>
            <li><Link to="login" element={LOGIN} >LOGIN</Link></li>
        </ol>
        </div>
        <Outlet/>
        </nav>
        <footer>
        <div className="lastimg">
            <br/><br/>
                    <img src="https://images.mamaearth.in/wysiwyg/PLAYSTORE18Apr.png"/>&nbsp;&nbsp;
                    <img src="https://images.mamaearth.in/wysiwyg/APPSTORE18Apr.png"/>
                    <br/>
                    
                    
                </div>
                <div className="lastone">
                <hr/>
                <h4>© 2025 Honasa Consumer Limited. All Rights Reserved</h4>
                </div>
        </footer>
        </>
    )
}
export default Lay
