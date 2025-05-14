import { fetchUserTokensById } from '@/utils/actions';
// import { UserProfile, auth } from '@clerk/nextjs'; staro
import { UserProfile } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

// const ProfilePage = async () => {
//   const { userId } = auth();
//   const currentTokens = await fetchUserTokensById(userId);
//   return (
//     <div>
//       <h2 className="mb-8 ml-8 text-xl font-extrabold">
//         Token Amount : {currentTokens}
//       </h2>
//       <UserProfile />
//     </div>
//   );
// };
// export default ProfilePage;
const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <>
      <UserProfile routing="hash" />
    </>
  );
};
export default ProfilePage;
