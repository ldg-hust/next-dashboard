export default async function Page(){
    const data =  await new Promise(resolve=>setTimeout(()=>resolve(3),300))
    return <p>customers Page</p>
}