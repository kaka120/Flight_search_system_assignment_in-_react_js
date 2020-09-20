import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './sharable/header/header';
import BodyComponent from './sharable/body/body';
import FooterComponent from './sharable/footer/footer';

import FunctionClick from './module/test/FunctionClick';
import EventBinding from './module/test/EventBinding';
import ParentComponent from './module/test/ParentComponent';
import UserGreeting from './module/test/UserGreeting';
import NameList from './module/test/NameList';
import NameListAndIndex from './module/test/NameListAndIndex';
import Form from './module/test/Formshandling/Form';
import LifeCycle from './module/test/LifeCycle/LifeCycle';
import LifeCycleUpdate from './module/test/LifeCycle/LifeCycleUpdate';
import FragmentDemo from './module/test/Fragments/FragmentDemo';
import Table from './module/test/Fragments/Table';
import NormalParentComponent from './module/test/pureComponents/NormalParentComponent';
import RefFocus from './module/test/ReactRefs/RefFocus';
import FocusInput from './module/test/RefToAClassComponent/FocusInput';
import ClickCounter from './module/test/HigherOrderComponent/ClickCounter';
import HoverCounter from './module/test/HigherOrderComponent/HoverCounter';
import ComponentA from './module/test/Context/ComponentA';

function App() {
  return (
    <div className="App">
        {/* <HeaderComponent></HeaderComponent>
        <BodyComponent></BodyComponent> */}
        {/* <FunctionClick/> */}
            {/* <EventBinding/> */}
            {/* <ParentComponent/> */}
            {/* <UserGreeting/> */}
            {/* <NameList/> */}
            {/* <NameListAndIndex/> */}
            {/* <Form/> */}
            {/* <LifeCycle/> */}
            {/* <LifeCycleUpdate/> */}
            {/* <FragmentDemo/> */}
            {/* <Table/> */}
            {/* <NormalParentComponent/> */}
            {/* <RefFocus/> */}
            {/* <FocusInput/> */}
            {/* <ClickCounter name="RAJA"/>
            <HoverCounter/> */}
            {/* <ComponentA/> */}
            <HeaderComponent/>
            <BodyComponent/>
    </div>
  );
}

export default App;
