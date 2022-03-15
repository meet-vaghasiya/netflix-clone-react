1. creating repository in git, install project, add remove url , and remove unnessary things from react project. and make intial commit.
2. install styel-component, fuse.js, normilize.css,react-router-dom, firebase npm package. start dev server and cheking error in server as well as console.log
3.  staring with jumbocron section. learning how to create style Component. here not css file is used. than making import all component in container file. because if there is jumbocron section than we devide this component into smaller style component. so for better style manage, we create container folder. where we arrange all data and that, container import in App.js file.
4. make footer for. which is same as jumbocron e=infect it's easier than jumbocrone.
5. 

folder structure
    ```
    component
        Jumbocrone
            styles
                jumbocrone.js
            index.js
        Footer
            styles
                footer.js
            index.js
        index.js   // here all components js is imported

    containers
        jumbocrone.js
        footer.js
    ```

6. export { default as Accordion } from "./accordion";
7. making accordina.
    ```
        Accordion.Body = function AccordionBody({ children, ...restProps }) {
            const { toggleShow } = useContext(AccordionContext);
            return toggleShow ? <Body {...restProps}>{children}</Body> : null;
        };
    ```
    if you are using any hooks than use inside  function() {}  only. otherwise below is okay.
     ```
        Accordion.Body = ({ children, ...restProps }) => {
            const { toggleShow } = useContext(AccordionContext);
            return toggleShow ? <Body {...restProps}>{children}</Body> : null;
        };
    ```
8. Here for hide and show we require state, and also to send data into other we also take help of useContext. for this check code for this.
9. in onClick={() => setToggleShow(!toggleShow)} call like this. instead of direct onClick={setToggleShow(!toggleShow)}. because it create infinte loop.
