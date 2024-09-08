const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	});
	const post = await prisma.post.update({
		where: { id: 1 },
		data: { published: true },
	});
	console.log(post);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
