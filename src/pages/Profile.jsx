function Profile() {
  return (
    <main className="page profile">
      <div className="profile-header">Account Settings</div>
      <div className="profile-card">
        <div className="profile-row">
          <img className="avatar" src="/avatar.png" alt="Marry Doe" />
          <div className="profile-info">
            <div className="profile-name">Marry Doe</div>
            <div className="profile-email">Marry@Gmail.Com</div>
          </div>
        </div>
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="profile-divider" />
    </main>
  );
}

export default Profile;
