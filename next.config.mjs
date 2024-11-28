const nextConfig = {
  /* config options here */

  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'], // 허용할 도메인 추가
    remotePatterns: [
      {
        protocol: 'https', // http 또는 https만 허용됨
        hostname: 'avatars.githubusercontent.com', // 외부 이미지 도메인
        port: '', // 포트가 없으면 빈 문자열로
        pathname: '/u/181046218', // 경로만 작성, 쿼리 파라미터 제외
      },
    ],
  },
}

export default nextConfig
