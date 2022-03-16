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

10. add faq form below accordian.
11. now preparation for route. so making contacts directory and add all routes name in that directory.
12. import * as ROUTES  and alway use that name rather giving static name.
13. make header component. header section contain 2 main things, first is header and anoter is feathers section, which contain same section of faq form.

14. home page finished.
15. make firebase config file. and make firebase context which wrap the App component. also making the context of firebase.add data using seeder.
16.  make login page. in that use common from html element. 
17. start signup page. if we need to add data in firebase during signup like username , than we need to update data. after signup request done.
18. make error, emila, password state for all.  form is submiited, if there is no error , and error message wil shown to user which get back by firebase.
19. before submitting and after success response from api,  form data should be empty.
20. useHistory will not working ,  so redirecting using useNavigate() function.
21. make route protected. useHistory is not working in react-router-dom 6 version . so change through  NavigationComponent .
22. how to pass data in NavigationComponent is still not working. so please check what's the problem. because we need to when user goto /browser and if is not authenticated than we need to send back in login page with location data. so we can pass that and push in /browse path after login.
23. make authChangeListner which see the changes of login and logout state , which set localstorage. so protected router.
