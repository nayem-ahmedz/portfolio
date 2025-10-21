import { useLoaderData } from "react-router";

function Versions(){
    const versionsData = useLoaderData();
    const versions = [...versionsData].reverse();
    return(
        <section className='version'>
            <h2 className='section-title text-center'>A snapshot of major changes</h2>
            <ul className='version-list'>
                {
                    versions.map( version => {
                        return(
                            <li key={version.id}>
                                <h3> {version.version} </h3> ---- {version.date}
                                <ul className="changes-list">
                                    {
                                        version.changes.map((item, index) => <li key={index}>{item}</li>)
                                    }
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default Versions;