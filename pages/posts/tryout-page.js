import Head from 'next/head'
import Layout from '../../components/layout'
import Greet from '../../components/Greet'
import ParentComponent from '../../components/ParentComponent'
import ChildComponent from '../../components/ChildComponent'
import HookCounter from '../../components/HookCounter'
import HookCounter3 from '../../components/HookCounter3'
import HookCounter4 from '../../components/HookCounter4'
import UseEffectAfterRender from '../../components/UseEffectAfterRender'
import ConditionallyRunUseEffects from '../../components/ConditionallyRunUseEffects'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Greet name="Jingnu" age="24">
                <p>
                    this is Greet component's Children!
                </p>
            </Greet>

            <ParentComponent />
            
            {/* useState with previous state */}
            <h2>useState with previous state</h2>
            <HookCounter />

            {/* useState with object */}
            <h2>useState with object</h2>
            <HookCounter3 />

            {/* useState with array */}
            <h2>useState with array</h2>
            <HookCounter4 />

            <h2>useEffect after render</h2>
            <UseEffectAfterRender />

            <h2>run useEffect conditionally</h2>
            <ConditionallyRunUseEffects />
        </Layout>
    )
}