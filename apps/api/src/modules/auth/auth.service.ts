import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(email: string) {
    const user = {
      id: "usr_ceo_001",
      fullname: "Nexus CEO",
      email,
      role: "CEO",
      tenantId: "tenant_nexus"
    };

    return {
      user,
      accessToken: this.jwtService.sign(user),
      security: {
        twoFactorRequired: false,
        deviceTracked: true,
        loginAlertQueued: true
      }
    };
  }
}

