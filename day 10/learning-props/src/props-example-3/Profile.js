import ProfileCard from './ProfileCard';

function Profile() {
    // arrays of object
    let profileArray = [
        { 'name': 'Pooja', 'age': 18, 'location': 'Dehra' },
        { 'name': 'Nitish', 'age': 19, 'location': 'Dehra' },
        { 'name': 'Deepak', 'age': 20, 'location': 'Daha' },
        { 'name': 'Ashu', 'age': 20, 'location': 'Samalkha' }]

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">User Profiles</h1>

            {profileArray.map((value, index) => (
                <ProfileCard name={value.name} age={value.age} location={value.location} />
            ))}

        </div>
    );
}

export default Profile;