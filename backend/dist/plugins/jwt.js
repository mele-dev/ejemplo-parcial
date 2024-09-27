import jwt from "@fastify/jwt";
import fp from "fastify-plugin";
const jwtOptions = {
    secret: "MYSUPERSECRET",
};
export default fp(async (fastify) => {
    fastify.register(jwt, jwtOptions);
    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify();
        }
        catch (err) {
            throw reply.unauthorized("Invalid jwt token" + request.headers.authorization);
        }
    });
});
//# sourceMappingURL=jwt.js.map