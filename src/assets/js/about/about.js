/* imgs */
import ash from "./about_assets/ash.png";
import jod from "./about_assets/jod03.png";
import swarna from "./about_assets/swarna.png";
import anitha from "./about_assets/anitha01.png";
import mohamed from "./about_assets/mohamed 02.png"

/* svg */
import githubSvg from "./about_assets/github.svg";
import instaSvg from "./about_assets/insta01.svg";
import linkedinSvg from "./about_assets/linkedin01.svg";


const teamMembers = [
	{
		name: "Zhixuan Wang",
		role: "Head Trainer",
		description:
			"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
		image: ash,
		social: {
			linkedin: "https://linkedin.com/in/zhixuanwang",
			instagram: "https://instagram.com/zhixuanwang",
			github: "https://github.com/zhixuanwang",
		},
	},
	{
		name: "Swarna Lekha Kanakaraj",
		role: "Head Trainer",
		description:
			"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
		image: swarna,
		social: {
			linkedin: "https://linkedin.com/in/swarnalekha",
			instagram: "https://instagram.com/swarnalekha",
			github: "https://github.com/swarnalekha",
		},
	},
	{
		name: "Anita Kumari",
		role: "Head Trainer",
		description:
			"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
		image: anitha,
		social: {
			linkedin: "https://linkedin.com/in/swarnalekha",
			instagram: "https://instagram.com/swarnalekha",
			github: "https://github.com/swarnalekha",
		},
	},
	{
		name: "Jod Wongphayak",
		role: "Head Trainer",
		description:
			"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
		image: jod,
		social: {
			linkedin: "https://linkedin.com/in/swarnalekha",
			instagram: "https://instagram.com/swarnalekha",
			github: "https://github.com/swarnalekha",
		},
	},
	{
		name: "Mohamed Guled",
		role: "Head Trainer",
		description:
			"With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
		image: mohamed,
		social: {
			linkedin: "https://linkedin.com/in/swarnalekha",
			instagram: "https://instagram.com/swarnalekha",
			github: "https://github.com/swarnalekha",
		},
	},
];

export default function renderMeetTeam() {
	const teamContainer = document.querySelector(".meet-team");

	teamMembers.forEach((member) => {
		const memberCard = document.createElement("div");
		memberCard.classList.add("team-member");

		memberCard.innerHTML = `
            <div class="member-image">
            <img src="${member.image}" alt="${member.name}">
            </div>
            <div class="member-details">
            <h2 class="member-name">${member.name}</h2>
            <p class="member-role">${member.role}</p>
            <p class="member-description">${member.description}</p>
            <div class="member-social">
                <a href="${member.social.linkedin}" target="_blank" title="LinkedIn">
                <img src="${linkedinSvg}" alt="LinkedIn">
                </a>
                <a href="${member.social.instagram}" target="_blank" title="Instagram">
                <img src="${instaSvg}" alt="Instagram">
                </a>
                <a href="${member.social.github}" target="_blank" title="GitHub">
                <img src="${githubSvg}" alt="GitHub">
                </a>
            </div>
            </div>
        `;

		teamContainer.appendChild(memberCard);
	});
}
