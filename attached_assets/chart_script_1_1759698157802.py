import pandas as pd
import plotly.graph_objects as go
import plotly.express as px

# Load the data
df = pd.read_csv('ux_ui_experience_calculations.csv')

# Create shortened role type labels for better readability
df['short_role'] = df['role_type'].str.replace('Field Creator (Don Norman)', 'Field Creator')
df['short_role'] = df['short_role'].str.replace('Professional Practice', 'Prof Practice')
df['short_role'] = df['short_role'].str.replace('Industry Standards', 'Industry Std')
df['short_role'] = df['short_role'].str.replace('Mainstream Adoption', 'Mainstream')

# Define colors - emphasize first two categories that can legitimately claim 24+ years
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', '#B4413C', '#964325']

# Create the bar chart
fig = go.Figure()

fig.add_trace(go.Bar(
    x=df['short_role'],
    y=df['max_experience_2025'],
    marker_color=colors[:len(df)],
    text=df['max_experience_2025'],
    textposition='outside',
    name='Max Experience'
))

# Add horizontal line at 24 years
fig.add_hline(y=24, line_dash="dash", line_color="red", 
              annotation_text="24 years", annotation_position="bottom right")

# Update layout
fig.update_layout(
    title="Max UX/UI Experience by Career Start",
    xaxis_title="Role Type",
    yaxis_title="Max Exp (Years)",
    showlegend=False
)

# Update traces for better appearance
fig.update_traces(cliponaxis=False)

# Update y-axis to show proper range
fig.update_yaxes(range=[0, max(df['max_experience_2025']) + 3])

# Save the chart
fig.write_image("chart.png")
fig.write_image("chart.svg", format="svg")

print("Chart created successfully!")
print("Data summary:")
print(df[['short_role', 'max_experience_2025']])