import ProfileCard from '../props-example-1/ChildComponent'

function ParentComponent() {
    let collageName = "piet";

    let profile = {
        'name': 'Pooja',
        'age': 18
    }

    return (
        <div>
            <ProfileCard profile={profile} collageName={collageName} />
        </div>
    )
}

export default ParentComponent;