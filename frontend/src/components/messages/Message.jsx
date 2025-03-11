import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);

	// Adjust classes dynamically
	const messageAlignment = fromMe ? "justify-end" : "justify-start";
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";
	const textAlign = fromMe ? "text-right" : "text-left";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`flex ${messageAlignment} items-end my-2`}>
			{!fromMe && (
				<div className='w-10 h-10 rounded-full overflow-hidden mr-2'>
					<img alt='User avatar' src={profilePic} />
				</div>
			)}

			<div className={`max-w-[75%] px-4 py-2 rounded-lg text-white ${bubbleBgColor} ${shakeClass}`}>
				<p className={textAlign}>{message.message}</p>
				<span className="text-xs opacity-70 block mt-1">{formattedTime}</span>
			</div>

			{fromMe && (
				<div className='w-10 h-10 rounded-full overflow-hidden ml-2'>
					<img alt='User avatar' src={profilePic} />
				</div>
			)}
		</div>
	);
};
export default Message;
