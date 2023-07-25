/*import logo from './logo.svg';*/
import './App.css';
import CircumIcon from "@klarr-agency/circum-icons-react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

function App() {

   const [isPlay , setIsPLay] = useState(false);
   const [gamble , setGamble] = useState(0);
   const [mousePos, setMousePos] = useState({x : 0, y : 0});

   const [isGameStart, setIsGameStart] = useState(false);
   const [playerMoveX, setPlayerMoveX] = useState(0);
   const [playerMoveY, setPlayerMoveY] = useState(0);

    useEffect(() => {
                        setGamble(numberInRange(1,6));
    },[gamble]);


    useEffect(() => {
        const MousePos = event => {
            setMousePos({x :  event.clientX, y : event.clientY});
        };

        window.addEventListener('mousemove', MousePos);
        return () => {
            window.removeEventListener('mousemove', MousePos);
        }
    }, []);



  return (
    <div class="App">
      <Fab color="primary" class="Fab" aria-label="add" onClick = {() => {

        if(!isPlay){

            setIsPLay(true);
            document.body.children[1].children[0].children[1].style.visibility = 'visible';
            document.body.children[1].children[0].children[0].style.visibility = 'hidden';

            initalStep(document.body.children[1].children[0].children[1].children[2]);

            if (gamble == 6){

                    const ppattern =  PlayerPattern(gamble, document.body.children[1].children[0].children[1].children[2], isGameStart);

                    // first move
                    setPlayerMoveX(ppattern.style.left);
                    setPlayerMoveY(ppattern.style.top);

                   console.log("gAMBLE =", {gamble});
            }


        }
      }}>
        <AddIcon />
      </Fab>
      <div class="PlayScreen">
        <Grid container spacing = {2}>
            <Grid item xs={10}>
                <div class="Title0">
                    <h4 class="title"> End </h4>
                </div>
                <div class="Title1">
                    <h4 class="title"> 90 </h4>
                </div>
                <div class="Title2">
                    <h4 class="title"> 89 </h4>
                </div>
                <div class="Title3">
                    <h4 class="title"> 88 </h4>
                </div>
                <div class="Title4">
                    <h4 class="title"> 87 </h4>
                </div>
                <div class="Title5">
                    <h4 class="title"> 86 </h4>
                </div>
                <div class="Title6">
                    <h4 class="title"> 85 </h4>
                </div>
                <div class="Title7">
                    <h4 class="title"> 84 </h4>
                </div>
                <div class="Title8">
                    <h4 class="title"> 83 </h4>
                </div>
                <div class="Title9">
                    <h4 class="title"> 82 </h4>
                </div>
                <div class="Title10">
                    <h4 class="risktitle"> 99 </h4>
                </div>
                <div class="Title11">
                    <h4 class="title"> 98 </h4>
                </div>
                <div class="Title12">
                    <h4 class="title"> 97 </h4>
                </div>
                <div class="Title13">
                    <h4 class="title"> 96 </h4>
                </div>
                <div class="Title14">
                    <h4 class="promotetitle"> 95 </h4>
                </div>
                <div class="Title15">
                    <h4 class="title"> 94 </h4>
                </div>
                <div class="Title16">
                    <h4 class="title"> 93 </h4>
                </div>
                <div class="Title17">
                    <h4 class="title"> 92 </h4>
                </div>
                <div class="Title18">
                    <h4 class="promotetitle"> 91 </h4>
                </div>
                <div class="Title19">
                    <h4 class="risktitle"> 81 </h4>
                </div>
                <div class="Title20">
                    <h4 class="title"> 80 </h4>
                </div>
                <div class="Title21">
                    <h4 class="title"> 79 </h4>
                </div>
                <div class="Title22">
                    <h4 class="title"> 78 </h4>
                </div>
                <div class="Title23">
                    <h4 class="title"> 77 </h4>
                </div>
                <div class="Title24">
                     <h4 class="title"> 76 </h4>
                </div>
                <div class="Title25">
                     <h4 class="promotetitle"> 75 </h4>
                </div>
                <div class="Title26">
                     <h4 class="title"> 74 </h4>
                </div>
                <div class="Title27">
                     <h4 class="risktitle"> 73 </h4>
                </div>
                <div class="Title28">
                     <h4 class="title"> 72 </h4>
                </div>
                <div class="Title29">
                    <h4 class="title"> 71 </h4>
                </div>
                <div class="Title30">
                    <h4 class="title"> 70 </h4>
                </div>
                <div class="Title31">
                    <h4 class="title"> 69 </h4>
                </div>
                <div class="Title32">
                    <h4 class="title"> 68 </h4>
                </div>
                <div class="Title33">
                    <h4 class="title"> 67 </h4>
                </div>
                <div class="Title34">
                     <h4 class="promotetitle"> 66 </h4>
                </div>
                <div class="Title35">
                     <h4 class="title"> 65 </h4>
                </div>
                <div class="Title36">
                     <h4 class="title"> 64 </h4>
                </div>
                <div class="Title37">
                     <h4 class="title"> 63 </h4>
                </div>
                <div class="Title38">
                     <h4 class="title"> 62 </h4>
                </div>
                <div class="Title39">
                     <h4 class="risktitle"> 61 </h4>
                </div>
                <div class="Title40">
                     <h4 class="title"> 60 </h4>
                </div>
                <div class="Title41">
                     <h4 class="title"> 59 </h4>
                </div>
                <div class="Title42">
                      <h4 class="title"> 58 </h4>
                </div>
                <div class="Title43">
                      <h4 class="title"> 57 </h4>
                </div>
                <div class="Title44">
                       <h4 class="title"> 56 </h4>
                </div>
                <div class="Title45">
                       <h4 class="title"> 55 </h4>
                </div>
                <div class="Title46">
                       <h4 class="promotetitle"> 54 </h4>
                </div>
                <div class="Title47">
                       <h4 class="title"> 53 </h4>
                </div>
                <div class="Title48">
                       <h4 class="title"> 52 </h4>
                </div>
                <div class="Title49">
                       <h4 class="title"> 51 </h4>
                </div>
                <div class="Title50">
                        <h4 class="title"> 50 </h4>
                </div>
                <div class="Title51">
                        <h4 class="risktitle"> 49 </h4>
                </div>
                <div class="Title52">
                        <h4 class="title"> 48 </h4>
                </div>
                <div class="Title53">
                        <h4 class="title"> 47 </h4>
                </div>
                <div class="Title54">
                        <h4 class="title"> 46 </h4>
                </div>
                <div class="Title55">
                        <h4 class="title"> 45 </h4>
                </div>
                 <div class="Title56">
                        <h4 class="promotetitle"> 44 </h4>
                 </div>
                 <div class="Title57">
                        <h4 class="title"> 43 </h4>
                 </div>
                 <div class="Title58">
                         <h4 class="title"> 42 </h4>
                 </div>
                 <div class="Title59">
                          <h4 class="title"> 41 </h4>
                 </div>
                 <div class="Title60">
                          <h4 class="risktitle"> 40 </h4>
                 </div>
                  <div class="Title61">
                           <h4 class="title"> 39 </h4>
                  </div>
                   <div class="Title62">
                            <h4 class="title"> 38 </h4>
                   </div>
                   <div class="Title63">
                             <h4 class="title"> 37 </h4>
                   </div>
                   <div class="Title64">
                             <h4 class="title"> 36 </h4>
                   </div>
                   <div class="Title65">
                             <h4 class="promotetitle"> 35 </h4>
                   </div>
                    <div class="Title66">
                              <h4 class="title"> 34 </h4>
                    </div>
                     <div class="Title67">
                               <h4 class="title"> 33 </h4>
                     </div>
                     <div class="Title68">
                               <h4 class="title"> 32 </h4>
                     </div>
                     <div class="Title69">
                               <h4 class="risktitle"> 31 </h4>
                     </div>
                     <div class="Title70">
                               <h4 class="risktitle"> 30 </h4>
                     </div>
                     <div class="Title71">
                                <h4 class="title"> 29 </h4>
                     </div>
                     <div class="Title72">
                                <h4 class="title"> 28 </h4>
                     </div>
                     <div class="Title73">
                                 <h4 class="title"> 27 </h4>
                     </div>
                     <div class="Title74">
                                 <h4 class="title"> 26 </h4>
                     </div>
                     <div class="Title75">
                                  <h4 class="risktitle"> 25 </h4>
                     </div>
                     <div class="Title76">
                                  <h4 class="promotetitle"> 24 </h4>
                     </div>
                     <div class="Title77">
                                  <h4 class="title"> 23 </h4>
                     </div>
                     <div class="Title78">
                                  <h4 class="title"> 22 </h4>
                     </div>
                     <div class="Title79">
                                  <h4 class="title"> 21 </h4>
                     </div>
                     <div class="Title80">
                                  <h4 class="title"> 20 </h4>
                     </div>
                     <div class="Title81">
                                   <h4 class="title"> 19 </h4>
                     </div>
                     <div class="Title82">
                                    <h4 class="title"> 18 </h4>
                     </div>
                      <div class="Title83">
                                     <h4 class="title"> 17 </h4>
                      </div>
                      <div class="Title84">
                                    <h4 class="title"> 16 </h4>
                      </div>
                      <div class="Title85">
                                     <h4 class="promotetitle"> 15 </h4>
                      </div>
                      <div class="Title86">
                                     <h4 class="risktitle"> 14 </h4>
                      </div>
                      <div class="Title87">
                                     <h4 class="title"> 13 </h4>
                      </div>
                      <div class="Title88">
                                     <h4 class="title"> 12 </h4>
                      </div>
                      <div class="Title89">
                                     <h4 class="title"> 11 </h4>
                      </div>
                      <div class="Title90">
                                     <h4 class="title"> 10 </h4>
                      </div>
                      <div class="Title91">
                                     <h4 class="risktitle"> 9 </h4>
                      </div>
                      <div class="Title92">
                                      <h4 class="title"> 8 </h4>
                      </div>
                      <div class="Title93">
                                      <h4 class="title"> 7 </h4>
                      </div>
                      <div class="Title94">
                                      <h4 class="title"> 6 </h4>
                      </div>
                      <div class="Title95">
                                      <h4 class="title"> 5 </h4>
                      </div>
                      <div class="Title96">
                                      <h4 class="promotetitle"> 4 </h4>
                      </div>
                      <div class="Title97">
                                      <h4 class="title"> 3 </h4>
                      </div>
                      <div class="Title98">
                                       <h4 class="title"> 2 </h4>
                      </div>
                      <div class="Title99">
                                       <h4 class="title"> 1 </h4>
                      </div>
                      <div class="Start">
                                        <h3 class="title"> Start </h3>
                      </div>
            </Grid>
        </Grid>
        <div class="Dice">
            <h3 class="DiceValue"> {gamble} </h3>
        </div>
        <div class="Player-0"></div>
        <div class="Player-1"></div>
        <div class="MousePos"> {mousePos.x} , {mousePos.y} </div>
        <IconButton class="emotion" aria-label="make fun with peers" onClick = {() => {
            setGamble(numberInRange(1,6));
            console.log("play = ", {gamble});
            document.body.children[1].children[0].children[1].children[2].style.top = playerMoveY +'pc';
            document.body.children[1].children[0].children[1].children[2].style.top = playerMoveX +'pc';
            const next =  PlayerPattern(gamble,document.body.children[1].children[0].children[1].children[2], isGameStart);
            console.log("Next = ", next);
        }}>
          <EmojiEmotionsIcon />
        </IconButton>
      </div>
    </div>

  );
}

function numberInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function initalStep(player) {

    if (!(player.className).includes("start")){
        player.className = 'Player-0 start';
    }
}

function PlayerPattern(dice, player, gameState){



    if (dice === 6 && !gameState){
                 player.style.top = (-436 + dice * 2.80) + 'pc';
                 player.style.left = 84.5 + 'pc';
                 return player;

    }else if (!gameState && dice > 0 && dice <= 6 ){

                    const x = (parseInt((player.style.top).replace("pc", " "))  + dice * 6).toString() + 'pc';
                    player.style.top = x ;
                    console.log("state = ",  x);
            return player;
    }


}





export default App;
