/*
React Hooks and Their Works
 useDebugValue: custom hook er state debug korar jonno use hoy. condition, handler, useEffect er moddhye useDebugValue use kra zay na. Tobe useDebugValue er moddhye conditionally value deya zay.
 useDebugValue performance issue kore, tobe er optional function dile shudhu matro devtool open kore useDebugValue exicute hoy.
 useDebugValue devtoolInspection e array return kore.
 const user={}/[];
 useDebugValue(user, (user)=>user?.bio)


 useId: useId sadaronota accesibilt access er jonno id create korar jonno use hoy.
 form component er label er htmlFor/for and input field er id te useId er id use hoy. input field er attribute "aria-describedBy" er sathe kuno text connection korar jonno text field er id attribute e useId er id use kora hoy. Shadaronoto, input field, label, and eder sathe kuno HTML element sync korar jonno useId er id (zeti unique) bebohar kora hoy.


 useTransition: useTransition kuno ekta state update priority differ korte use kora hoy. Ekit component er state update priority beshi thake. Component er kuno ekta state update fast and onnoti slow hole, slow state update er jonno fast er rendering atke thake. Kintu react by default duti state update ke batch korte cay.
 const [isPending, startTransitio]=useTransition();
 component er slow update zate fast update ke atke na rakhe (batch update er jonno) se jonno startTransition er callback function er moddhye slow state update code likha hoy. slow stae update shuru-shesh porzonto isPending true and slow state update shesh hole isPending false hoy.


 useDifferedValue: state update delay korar jonno useDifferedValue use kora hoy. Debounce er alternative hisabe defferedValue use kora zate pare.
 const [name, setName]=useState("");
 const diffedName=useDifferedValue(name);


 useInsertionEffect: DOM element e dynamic vabe style/css apply korar jonno useInsertionEffect use kora hoy. useInsertionEffect er structure useEffect er motoi. useInsertionEffect component render er protomei syncrhonously run hoy.


 useImperativeHandle: DOM level e parentComponent theke zodi childComponent er kuno function/procedure acces korte hoy tahole useImperativeHanlde hook use kora hoy. useImperativeHandle(ref, ()=>{
    function 1()=>{}
    
    function 2()=>{}
    
    })
ekhane ref asole child componet er reference za useRef diye create kora hoyeche. props. contextApi, reducer, redux chrao useImperativeandle hook er maddhyome child er kuno kichu parent directly access korte pare.
*/