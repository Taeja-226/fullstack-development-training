function Skills(){
      const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const listStyle = {
    textAlign: 'center',
    listStylePosition: 'inside',
    padding: 0,
  };
    return(
        <div style={containerStyle}>
        <ul style={listStyle}>
            <li><b>Soft Skills</b></li>
            <ul>
                <li>Communication</li>
                <li>Team Work</li>
                <li>Team Leadership</li>
                <li>Time Management</li>
                <li>Problem-Solving</li>
            </ul>
            <li><b>Technical Skills</b></li>
            <ul>
                <li>Mathematical & Analytical</li>
                <li>Data Analysis & Visualization</li>
                <li>Technical Writing & Documentation</li>
            </ul>
        </ul>
        </div>
    )
}
export {Skills}