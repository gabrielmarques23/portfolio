import {
  MetricsContainer,
  ProfileHeader,
  AvatarBox,
  ProfileInfo,
  StatsGrid,
  StatItem,
  StackSection,
  StackChips,
  Chip
} from "./style";

export function MetricsCard({ profile, metrics = [], stack = [], avatarSrc }) {
  return (
    <MetricsContainer>
      <ProfileHeader>
        <AvatarBox>
          {avatarSrc ? (
            <img src={avatarSrc} alt={profile?.name || "Avatar"} />
          ) : (
            <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>GM</span>
          )}
        </AvatarBox>
        <ProfileInfo>
          <h4>{profile?.name || "Gabriel Marques"}</h4>
          <span>{profile?.role || "Fullstack Creative Developer"}</span>
        </ProfileInfo>
      </ProfileHeader>

      {metrics.length > 0 && (
        <StatsGrid>
          {metrics.map((item, index) => (
            <StatItem key={index}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </StatItem>
          ))}
        </StatsGrid>
      )}

      {stack.length > 0 && (
        <StackSection>
          <span className="section-label">Core Stack</span>
          <StackChips>
            {stack.map((tech, index) => (
              <Chip key={index}>{tech}</Chip>
            ))}
          </StackChips>
        </StackSection>
      )}
    </MetricsContainer>
  );
}
