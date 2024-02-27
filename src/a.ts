// import { NextRequest, NextResponse } from 'next/server';

// import { roles } from './shared/constants/AuthConst';

// export default function middleware(request: NextRequest) {
//   const token = request.cookies.get('admetaToken')?.value;
//   const profile = request.cookies.get('profileCollaborator')?.value || '';
//   const home = '/';

//   const SignInURL = new URL(home, request.url);
//   const DashboardURL = new URL('/dashboard', request.url);
//   const TargetsURL = new URL('/targets', request.url);

//   if (!token) {
//     if (request.nextUrl.pathname === home) {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(SignInURL);
//   }

//   if (request.nextUrl.pathname === home) {
//     if (roles.adm.includes(profile)) {
//       return NextResponse.redirect(DashboardURL);
//     }

//     if (roles.default.includes(profile)) {
//       return NextResponse.redirect(TargetsURL);
//     }
//   }
// }

// export const config = {
//   matcher: [
//     '/',
//     '/dashboard/:path*',
//     '/departments/:path*',
//     '/targets/:path*',
//     '/my_profile/:path*',
//     '/system-config/:path*'
//   ]
// };
