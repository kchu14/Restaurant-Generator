import React from 'react';

const PrivacyComponent = () =>
    <div className="container-fluid mt-4 col-10">
        <h3> Privacy Policy </h3>
        <p> Last updated: 12/06/19 </p>
        <p>
        This policy informs you of the collection and use of information we receive
        from users at https://restaurants-for-you.herokuapp.com/. If you do not agree with the terms,
        please do not use this site.
        </p>

        <h6 className="mt-4"> Policy Changes: </h6>
        <p>
        We may make changes to this Privacy Policy at any time. The date the last changes were published is shown above.
        </p>

        <h6 className="mt-4"> Information Collection And Use: </h6>
        <p>
       We may ask you to provide us with personal information that can be used to contact or identify you.
        Personal information may include your name, email, and liked restaurants. You are not
        required to provide us with personal information, but not doing so may limit the features of the site.
         Anonymous information on the use of our services, such as liked restaurants, search data,
        and user preferences, are liable to be recorded and shared with 3rd party organizations. We are using
        Yelp’s API, so search queries sent through their API are subject to their uses as well. We will only
        send search queries that aren’t linked to your personal information i.e. we won’t give Yelp your email.
         We are using your data to improve and maintain our website. User data are saved to allow for
         a more personalized experience where the user doesn’t have
          to re-enter information and where a user can save restaurants. Your liked restaurants will be displayed
          on your profile page along with your username, all other data will be hidden. Your username will
          appear in the list of users who liked this restaurant if you liked a restaurant.
        </p>

        <h6 className="mt-4"> Data Access and Protection: </h6>
        <p>
        Restaurant owners will have access to anonymous user activity data. Data will be made
        anonymous by not including any identifying information. Individual identifying information
        will never be shared. We are protecting it and storing it by not storing your password in
        plain text. All personal data communication is fully encrypted. We will take every
        reasonable precaution to protect your data. Users can change their data at anytime
        by deleting their account, change their personal information, and delete liked restaurants.
        </p>

        <h6 className="mt-4"> Communications: </h6>
        <p>
        We may use your personal information to contact you with restaurant deals or information about website updates.
        </p>

        <h6 className="mt-4"> Contact Us: </h6>
        <p>
        If you have any questions about this Privacy Policy, please contact us.
        </p>


   </div>

export default PrivacyComponent;