import pandas as pd
import plotly.graph_objects as go
import plotly.express as px

# Load the data
df = pd.read_csv('ux_ui_timeline_milestones.csv')

# Create the timeline chart
fig = go.Figure()

# Add the main line showing professional roles growth
fig.add_trace(go.Scatter(
    x=df['year'],
    y=df['professional_roles_estimate'],
    mode='lines+markers',
    line=dict(color='#1FB8CD', width=3),
    marker=dict(size=8, color='#1FB8CD'),
    name='UX/UI Roles',
    hovertemplate='Year: %{x}<br>Roles: %{y:,}<extra></extra>'
))

# Add milestone markers with annotations
milestone_colors = ['#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', '#B4413C']
for i, row in df.iterrows():
    if row['professional_roles_estimate'] > 0:  # Only show milestones where there are roles
        color = milestone_colors[i % len(milestone_colors)]
        
        # Add milestone marker
        fig.add_trace(go.Scatter(
            x=[row['year']],
            y=[row['professional_roles_estimate']],
            mode='markers',
            marker=dict(size=12, color=color, symbol='diamond'),
            name=row['milestone'][:15] + '...' if len(row['milestone']) > 15 else row['milestone'],
            hovertemplate=f"{row['milestone']}<br>Year: {row['year']}<br>Roles: {row['professional_roles_estimate']:,}<extra></extra>",
            showlegend=True
        ))

# Update layout with logarithmic y-axis
fig.update_layout(
    title='UX/UI Professional Roles Evolution',
    xaxis_title='Year',
    yaxis_title='Prof. Roles',
    yaxis_type='log',
    legend=dict(
        orientation='v',
        yanchor='top',
        y=1,
        xanchor='left',
        x=1.02
    )
)

# Update axes
fig.update_xaxes(
    range=[1970, 2025],
    dtick=10
)

fig.update_yaxes(
    range=[0, 6],  # log scale: 10^0 to 10^6
    dtick=1
)

# Update traces to prevent clipping
fig.update_traces(cliponaxis=False)

# Save as both PNG and SVG
fig.write_image('timeline_chart.png')
fig.write_image('timeline_chart.svg', format='svg')

print("Chart created successfully!")
print("Final data preview:")
print(df[['year', 'milestone', 'professional_roles_estimate']])